import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, chatConversations, chatMessages, InsertChatConversation, InsertChatMessage, contactMessages, InsertContactMessage } from "../drizzle/schema";
import { ENV } from './_core/env';
import { encrypt, decrypt } from './encryption';

// Fields to encrypt in each table
const ENCRYPTED_FIELDS = {
  contactMessages: ['email', 'phone', 'message'] as const,
  chatMessages: ['content'] as const,
  users: ['email'] as const,
};

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Chat conversation functions
export async function createChatConversation(sessionId: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const conversation: InsertChatConversation = {
    sessionId,
  };

  const result = await db.insert(chatConversations).values(conversation);
  return result;
}

export async function getChatConversationBySessionId(sessionId: string) {
  const db = await getDb();
  if (!db) {
    return undefined;
  }

  const result = await db
    .select()
    .from(chatConversations)
    .where(eq(chatConversations.sessionId, sessionId))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getChatMessages(conversationId: number) {
  const db = await getDb();
  if (!db) {
    return [];
  }

  const result = await db
    .select()
    .from(chatMessages)
    .where(eq(chatMessages.conversationId, conversationId))
    .orderBy(chatMessages.createdAt);

  // Decrypt message content when retrieving
  return result.map(msg => ({
    ...msg,
    content: decrypt(msg.content),
  }));
}

export async function addChatMessage(message: InsertChatMessage) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  // Encrypt message content before storing
  const encryptedMessage: InsertChatMessage = {
    ...message,
    content: encrypt(message.content),
  };

  await db.insert(chatMessages).values(encryptedMessage);
}

// In-memory storage for contact messages when database is not available
const inMemoryContactMessages: Array<InsertContactMessage & { id: number; createdAt: Date }> = [];
let contactIdCounter = 1;

// Contact message functions
export async function createContactMessage(message: InsertContactMessage) {
  const db = await getDb();
  if (!db) {
    // Fallback to in-memory storage
    console.log("[Contact] Database not available, storing message in memory");
    const storedMessage = {
      ...message,
      id: contactIdCounter++,
      createdAt: new Date(),
    };
    inMemoryContactMessages.push(storedMessage);
    console.log(`[Contact] Message stored with ID: ${storedMessage.id}`);
    return { insertId: storedMessage.id };
  }

  // Encrypt sensitive fields before storing
  const encryptedMessage: InsertContactMessage = {
    ...message,
    email: encrypt(message.email),
    phone: message.phone ? encrypt(message.phone) : message.phone,
    message: encrypt(message.message),
  };

  const result = await db.insert(contactMessages).values(encryptedMessage);
  return result;
}

export async function getContactMessages() {
  const db = await getDb();
  if (!db) {
    return [];
  }

  const result = await db
    .select()
    .from(contactMessages)
    .orderBy(contactMessages.createdAt);

  // Decrypt sensitive fields when retrieving
  return result.map(msg => ({
    ...msg,
    email: decrypt(msg.email),
    phone: msg.phone ? decrypt(msg.phone) : msg.phone,
    message: decrypt(msg.message),
  }));
}
