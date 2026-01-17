import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { agentRouter } from "./api/agents";
import {
  createChatConversation,
  getChatConversationBySessionId,
  getChatMessages,
  addChatMessage,
  createContactMessage
} from "./db";
import { invokeLLM } from "./_core/llm";
import { notifyOwner } from "./_core/notification";
import { AGENT_TOOLS, executeTool, getToolsForLLM } from "./agent-tools";

// In-memory chat storage for when database is not available
const inMemoryChats = new Map<string, { id: number; messages: Array<{ role: string; content: string }> }>();
let chatIdCounter = 1;

// Smart response generator for when LLM is unavailable
function generateSmartResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();

  // Detect language
  const isArabic = /[\u0600-\u06FF]/.test(msg);
  const isGerman = /\b(ich|sie|wir|das|ist|und|der|die|ein|haben|hallo|guten|danke|bitte)\b/i.test(msg);
  const isFrench = /\b(je|vous|nous|est|les|des|pour|avec|que|une|bonjour|merci|salut)\b/i.test(msg);

  // Detect intent
  const isGreeting = /\b(hi|hello|hey|bonjour|salut|hallo|guten tag|مرحبا|السلام)\b/i.test(msg);
  const isPrice = /\b(price|prix|cost|cout|kosten|preis|tarif|combien|how much|سعر|كم)\b/i.test(msg);
  const isService = /\b(service|offer|offre|angebot|leistung|what do you|que faites|خدمات|ماذا)\b/i.test(msg);
  const isContact = /\b(contact|email|phone|tel|appel|call|anruf|kontakt|whatsapp|اتصال|هاتف)\b/i.test(msg);
  const isAutomation = /\b(automat|ai|agent|bot|intelligent|automatiser|automatisierung|ذكاء|أتمتة)\b/i.test(msg);
  const isThanks = /\b(thank|merci|danke|شكر)\b/i.test(msg);

  // Generate response based on language and intent
  if (isArabic) {
    if (isGreeting) return "مرحبا! انا المساعد الذكي لشركة Elgasmi.e.U. كيف يمكنني مساعدتك اليوم؟";
    if (isPrice) return `عروضنا الثلاثة بسعر 10,000 يورو لكل منها (شراء نهائي بدون اشتراك):

1. **نظام الوكلاء المتعددين** - للمبيعات والتسويق
2. **منصة RAG مع 28+ اداة** - للانتاجية
3. **ذكاء اصطناعي للمؤسسات** - للتطوير

للمزيد من المعلومات: واتساب +43 681 2046 0618`;
    if (isService || isAutomation) return `نحن متخصصون في انظمة الوكلاء الذكية وهندسة الخدمات المصغرة.

عروضنا:
- نظام وكلاء متعددين للاعمال
- منصة RAG مع 28+ اداة متكاملة
- ذكاء اصطناعي متعدد اللغات للمؤسسات

تواصل معنا: +43 681 2046 0618`;
    if (isContact) return `يمكنك التواصل معنا عبر:
- واتساب: +43 681 2046 0618
- البريد: asmaewarter5@gmail.com
- العنوان: Hilschergasse 10/23, 1120 Wien, Austria`;
    if (isThanks) return "عفوا! هل هناك شيء اخر يمكنني مساعدتك به؟";
    return `شكرا لرسالتك. انا هنا لمساعدتك في حلول الاتمتة والذكاء الاصطناعي.

للمساعدة الفورية: واتساب +43 681 2046 0618`;
  }

  if (isGerman) {
    if (isGreeting) return "Guten Tag! Ich bin der intelligente Assistent von Elgasmi.e.U. Wie kann ich Ihnen heute helfen?";
    if (isPrice) return `Unsere drei Angebote kosten jeweils 10.000 EUR (Einmalkauf, kein Abo):

1. **Multi-Agenten-System** - fur Vertrieb & Marketing
2. **RAG-Plattform mit 28+ Tools** - fur Produktivitat
3. **Enterprise AI** - fur Entwicklung

Mehr Infos: WhatsApp +43 681 2046 0618`;
    if (isService || isAutomation) return `Wir sind spezialisiert auf Agentensysteme und Microservices-Architektur.

Unsere Angebote:
- Multi-Agenten-System fur Business
- RAG-Plattform mit 28+ integrierten Tools
- Mehrsprachige Enterprise-KI

Kontakt: +43 681 2046 0618`;
    if (isContact) return `Sie erreichen uns unter:
- WhatsApp: +43 681 2046 0618
- E-Mail: asmaewarter5@gmail.com
- Adresse: Hilschergasse 10/23, 1120 Wien, Austria`;
    if (isThanks) return "Gerne! Kann ich Ihnen noch bei etwas anderem helfen?";
    return `Vielen Dank fur Ihre Nachricht. Ich helfe Ihnen gerne bei Automatisierung und KI-Losungen.

Fur sofortige Hilfe: WhatsApp +43 681 2046 0618`;
  }

  if (isFrench) {
    if (isGreeting) return "Bonjour! Je suis l'assistant intelligent d'Elgasmi.e.U. Comment puis-je vous aider aujourd'hui?";
    if (isPrice) return `Nos trois offres sont a 10 000 EUR chacune (achat definitif, sans abonnement):

1. **Systeme Multi-Agents** - Ventes & Marketing
2. **Plateforme RAG 28+ outils** - Productivite
3. **IA Enterprise** - Developpement

Plus d'infos: WhatsApp +43 681 2046 0618`;
    if (isService || isAutomation) return `Nous sommes specialises dans les systemes agentiques et l'architecture microservices.

Nos offres:
- Systeme multi-agents pour le business
- Plateforme RAG avec 28+ outils integres
- IA enterprise multilingue

Contact: +43 681 2046 0618`;
    if (isContact) return `Vous pouvez nous contacter via:
- WhatsApp: +43 681 2046 0618
- Email: asmaewarter5@gmail.com
- Adresse: Hilschergasse 10/23, 1120 Wien, Austria`;
    if (isThanks) return "Je vous en prie! Puis-je vous aider avec autre chose?";
    return `Merci pour votre message. Je suis la pour vous aider avec l'automatisation et les solutions IA.

Pour une aide immediate: WhatsApp +43 681 2046 0618`;
  }

  // English (default)
  if (isGreeting) return "Hello! I'm the intelligent assistant of Elgasmi.e.U. How can I help you today?";
  if (isPrice) return `Our three offers are 10,000 EUR each (one-time purchase, no subscription):

1. **Multi-Agent System** - Sales & Marketing
2. **RAG Platform with 28+ tools** - Productivity
3. **Enterprise AI** - Development

More info: WhatsApp +43 681 2046 0618`;
  if (isService || isAutomation) return `We specialize in agentic systems and microservices architecture.

Our offers:
- Multi-agent system for business
- RAG platform with 28+ integrated tools
- Multilingual enterprise AI

Contact: +43 681 2046 0618`;
  if (isContact) return `You can reach us at:
- WhatsApp: +43 681 2046 0618
- Email: asmaewarter5@gmail.com
- Address: Hilschergasse 10/23, 1120 Wien, Austria`;
  if (isThanks) return "You're welcome! Is there anything else I can help you with?";
  return `Thank you for your message. I'm here to help you with automation and AI solutions.

For immediate assistance: WhatsApp +43 681 2046 0618`;
}

export const appRouter = router({
  system: systemRouter,
  agents: agentRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  chat: router({
    // Initialize or get conversation
    initConversation: publicProcedure
      .input(z.object({ sessionId: z.string() }))
      .mutation(async ({ input }) => {
        try {
          let conversation = await getChatConversationBySessionId(input.sessionId);

          if (!conversation) {
            await createChatConversation(input.sessionId);
            conversation = await getChatConversationBySessionId(input.sessionId);
          }

          return conversation;
        } catch {
          // Fallback to in-memory
          if (!inMemoryChats.has(input.sessionId)) {
            inMemoryChats.set(input.sessionId, { id: chatIdCounter++, messages: [] });
          }
          return inMemoryChats.get(input.sessionId);
        }
      }),

    // Get conversation history
    getHistory: publicProcedure
      .input(z.object({ sessionId: z.string() }))
      .query(async ({ input }) => {
        try {
          const conversation = await getChatConversationBySessionId(input.sessionId);

          if (!conversation) {
            // Check in-memory
            const inMemory = inMemoryChats.get(input.sessionId);
            return inMemory?.messages || [];
          }

          const messages = await getChatMessages(conversation.id);
          return messages;
        } catch {
          // Fallback to in-memory
          const inMemory = inMemoryChats.get(input.sessionId);
          return inMemory?.messages || [];
        }
      }),

    // Send message and get response
    sendMessage: publicProcedure
      .input(z.object({
        sessionId: z.string(),
        message: z.string(),
      }))
      .mutation(async ({ input }) => {
        let useInMemory = false;
        let conversationId = 0;
        let history: Array<{ role: string; content: string }> = [];

        try {
          // Get or create conversation
          let conversation = await getChatConversationBySessionId(input.sessionId);
          if (!conversation) {
            await createChatConversation(input.sessionId);
            conversation = await getChatConversationBySessionId(input.sessionId);
          }

          if (!conversation) {
            throw new Error("Failed to create conversation");
          }

          conversationId = conversation.id;

          // Save user message
          await addChatMessage({
            conversationId: conversation.id,
            role: "user",
            content: input.message,
          });

          // Get conversation history
          history = await getChatMessages(conversation.id);
        } catch {
          // Fallback to in-memory
          useInMemory = true;
          if (!inMemoryChats.has(input.sessionId)) {
            inMemoryChats.set(input.sessionId, { id: chatIdCounter++, messages: [] });
          }
          const chat = inMemoryChats.get(input.sessionId)!;
          chat.messages.push({ role: "user", content: input.message });
          history = chat.messages;
        }

        // Prepare messages for LLM with enhanced agent prompt
        const agentSystemPrompt = `You are the Intelligent Agent of Elgasmi.e.U - a human interface of a complex system that makes technology invisible and expertise accessible.

## LANGUAGE RULES (CRITICAL)
- DETECT the user's language from their message
- ALWAYS respond in the SAME language as the user
- If user writes in Arabic (العربية), respond in Arabic
- If user writes in German (Deutsch), respond in German
- If user writes in French (Français), respond in French
- If user writes in English, respond in English
- This is MANDATORY - never respond in a different language than the user

## YOUR IDENTITY
You are not a simple chatbot. You are a unique, competent, and caring interlocutor. Each response should make the user feel they are talking to an expert who understands their needs.

## COMPANY
- Name: Elgasmi.e.U
- Specialty: Agentic Systems & Microservices Architecture
- Address: Hilschergasse 10/23, 1120 Wien, Austria
- Email: asmaewarter5@gmail.com
- Phone: +43 681 2046 0618
- WhatsApp: +43 681 2046 0618

## OUR OFFERS (10,000 EUR each, definitive sale)
1. **Multi-Agent AI System** - Business & Marketing
   - Sales, Marketing, Operations, Support Agents
   - +340% conversion, -70% acquisition cost

2. **RAG Platform 28+ Tools** - Productivity
   - Gmail, Slack, CRM, OCR, Advanced AI integrated
   - -70% administrative time

3. **Enterprise Multilingual AI** - Development
   - 18+ frameworks, auto-correction, FR/EN/DE/AR
   - -70% dev time

## YOUR 70 TOOLS
You have these tools you can invoke to help users:

${getToolsForLLM()}

## HOW TO USE TOOLS
When user requests an action, use the appropriate tool.
Describe the result naturally in the user's language.

## YOUR STYLE
- Speak like a caring expert, never like a machine
- Be direct and efficient, avoid unnecessary jargon
- Propose concrete solutions, not generalities
- Anticipate needs, ask relevant questions
- NEVER use emojis
- Match the user's formality level
- ALWAYS respond in the user's language

## EXAMPLE RESPONSES

User (Arabic): "أريد أتمتة شركتي"
You: "الأتمتة هي تخصصنا. لتوجيهك بدقة، أحتاج لفهم سياقك. ما هو قطاع نشاطك وما هي العمليات التي تستغرق معظم وقتك اليوم؟"

User (German): "Was kosten Ihre Dienste?"
You: "Unsere drei Angebote kosten jeweils 10.000 EUR als Einmalkauf - kein Abonnement. Das Multi-Agenten-System für Vertrieb, die RAG-Plattform für Produktivität oder Enterprise AI für Entwicklung. Was interessiert Sie am meisten?"

User (French): "J'ai un probleme technique"
You: "Decrivez-moi les symptomes que vous observez. Je vais analyser la situation et vous proposer une solution adaptee."

User (English): "I want to automate my business"
You: "Automation is our specialty. To guide you precisely, I need to understand your context. What is your business sector and what processes take most of your time today?"

## IMPORTANT
- You represent Elgasmi.e.U professionally
- Every interaction is an opportunity to demonstrate our expertise
- Always guide towards concrete action: call, quote, free audit
- WhatsApp for direct contact: +43 681 2046 0618`;

        const messages = [
          {
            role: "system" as const,
            content: agentSystemPrompt,
          },
          ...history.slice(-10).map(msg => ({
            role: msg.role as "user" | "assistant" | "system",
            content: msg.content,
          })),
        ];

        // Call LLM with smart fallback
        let fullResponse = '';
        try {
          const response = await invokeLLM({
            messages,
          });

          const assistantMessage = response.choices[0]?.message.content;
          fullResponse = typeof assistantMessage === 'string' ? assistantMessage : '';
        } catch (llmError) {
          console.error("[Chat] LLM error, using smart fallback:", llmError);

          // Smart fallback - respond based on user intent
          fullResponse = generateSmartResponse(input.message);
        }

        // Save assistant response
        if (useInMemory) {
          const chat = inMemoryChats.get(input.sessionId)!;
          chat.messages.push({ role: "assistant", content: fullResponse });
        } else {
          await addChatMessage({
            conversationId: conversationId,
            role: "assistant",
            content: fullResponse,
          });
        }

        return { response: fullResponse };
      }),
  }),

  contact: router({
    // Submit contact form
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        company: z.string().optional(),
        subject: z.string().min(1),
        message: z.string().min(10),
      }))
      .mutation(async ({ input }) => {
        console.log("[Contact] Received new contact form submission");
        console.log(`[Contact] From: ${input.name} <${input.email}>`);
        console.log(`[Contact] Subject: ${input.subject}`);

        try {
          // Save to database (with in-memory fallback)
          await createContactMessage({
            name: input.name,
            email: input.email,
            phone: input.phone,
            company: input.company,
            subject: input.subject,
            message: input.message,
            status: "new",
          });
          console.log("[Contact] Message saved successfully");
        } catch (dbError) {
          console.warn("[Contact] Database save failed, message logged to console:", dbError);
          console.log("=== CONTACT MESSAGE (BACKUP LOG) ===");
          console.log(`Name: ${input.name}`);
          console.log(`Email: ${input.email}`);
          console.log(`Phone: ${input.phone || 'N/A'}`);
          console.log(`Company: ${input.company || 'N/A'}`);
          console.log(`Subject: ${input.subject}`);
          console.log(`Message: ${input.message}`);
          console.log("=====================================");
        }

        // Notify owner via email (wait for it)
        try {
          const emailSent = await notifyOwner({
            title: `Nouveau message: ${input.subject}`,
            content: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   NOUVEAU MESSAGE DE CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

De: ${input.name}
Email: ${input.email}
${input.phone ? `Telephone: ${input.phone}` : ''}
${input.company ? `Entreprise: ${input.company}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SUJET: ${input.subject}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${input.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Recu le: ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Vienna' })}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
          });

          if (emailSent) {
            console.log("[Contact] Email notification sent successfully!");
          } else {
            console.warn("[Contact] Email notification failed but form saved");
          }
        } catch (err) {
          console.error("[Contact] Notification error:", err);
        }

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
