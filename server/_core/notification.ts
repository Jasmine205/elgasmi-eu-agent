import { TRPCError } from "@trpc/server";
import { ENV } from "./env";

export type NotificationPayload = {
  title: string;
  content: string;
};

const TITLE_MAX_LENGTH = 1200;
const CONTENT_MAX_LENGTH = 20000;

// Email configuration from environment
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587", 10);
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "asmaewarter5@gmail.com";

const trimValue = (value: string): string => value.trim();
const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const buildEndpointUrl = (baseUrl: string): string => {
  const normalizedBase = baseUrl.endsWith("/")
    ? baseUrl
    : `${baseUrl}/`;
  return new URL(
    "webdevtoken.v1.WebDevService/SendNotification",
    normalizedBase
  ).toString();
};

const validatePayload = (input: NotificationPayload): NotificationPayload => {
  if (!isNonEmptyString(input.title)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Notification title is required.",
    });
  }
  if (!isNonEmptyString(input.content)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Notification content is required.",
    });
  }

  const title = trimValue(input.title);
  const content = trimValue(input.content);

  if (title.length > TITLE_MAX_LENGTH) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Notification title must be at most ${TITLE_MAX_LENGTH} characters.`,
    });
  }

  if (content.length > CONTENT_MAX_LENGTH) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Notification content must be at most ${CONTENT_MAX_LENGTH} characters.`,
    });
  }

  return { title, content };
};

/**
 * Send email using Resend API
 */
async function sendEmailNotification(title: string, content: string): Promise<boolean> {
  // Log the notification for development/debugging
  console.log(`
=====================================
NEW NOTIFICATION - ${new Date().toISOString()}
=====================================
TO: ${NOTIFICATION_EMAIL}
SUBJECT: ${title}
-------------------------------------
${content}
=====================================
`);

  // Try Resend first (primary email service)
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (RESEND_API_KEY && RESEND_API_KEY.startsWith('re_')) {
    try {
      console.log("[Email] Sending via Resend API...");
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Elgasmi.e.U <onboarding@resend.dev>",
          to: [NOTIFICATION_EMAIL],
          subject: `[Elgasmi.e.U] ${title}`,
          text: content,
          html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin:0;">${title}</h2>
    </div>
    <div class="content">
      <pre style="white-space: pre-wrap; font-family: inherit;">${content}</pre>
    </div>
    <div class="footer">
      Elgasmi.e.U - Agentic Systems & Microservices
    </div>
  </div>
</body>
</html>`,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("[Email] Sent successfully via Resend! ID:", responseData.id);
        return true;
      }
      console.error("[Email] Resend error:", JSON.stringify(responseData));
    } catch (err) {
      console.error("[Email] Resend exception:", err);
    }
  }

  // Fallback to SendGrid
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  if (SENDGRID_API_KEY) {
    try {
      const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: NOTIFICATION_EMAIL }] }],
          from: { email: "noreply@elgasmi.eu", name: "Elgasmi.e.U" },
          subject: `[Elgasmi.e.U] ${title}`,
          content: [
            { type: "text/plain", value: content },
          ],
        }),
      });

      if (response.ok || response.status === 202) {
        console.log("[Email] Sent successfully via SendGrid");
        return true;
      }
      console.error("[Email] SendGrid failed:", await response.text());
    } catch (err) {
      console.error("[Email] SendGrid exception:", err);
    }
  }

  console.warn("[Email] No working email service - configure RESEND_API_KEY in .env");
  return false;
}

/**
 * Sends notification to owner via email (primary method)
 * Returns `true` if notification was delivered.
 */
export async function notifyOwner(
  payload: NotificationPayload
): Promise<boolean> {
  const { title, content } = validatePayload(payload);

  console.log("[Notification] Sending email notification...");

  // Always send email first (most reliable)
  const emailSent = await sendEmailNotification(title, content);

  if (emailSent) {
    console.log("[Notification] Email sent successfully!");
    return true;
  }

  // Fallback: Try Manus Notification Service (if configured)
  if (ENV.forgeApiUrl && ENV.forgeApiKey) {
    const endpoint = buildEndpointUrl(ENV.forgeApiUrl);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${ENV.forgeApiKey}`,
          "content-type": "application/json",
          "connect-protocol-version": "1",
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        console.log("[Notification] Sent via Manus service (fallback)");
        return true;
      }
    } catch (error) {
      console.warn("[Notification] Manus service error:", error);
    }
  }

  console.error("[Notification] All notification methods failed!");
  return false;
}
