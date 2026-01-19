import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { createServer } from "../../server/_core/index";

let serverHandler: any;

async function getHandler() {
  if (!serverHandler) {
    const app = await createServer();
    serverHandler = app;
  }
  return serverHandler;
}

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    const app = await getHandler();

    // Convert Netlify event to Express-compatible request
    const response = await new Promise<{ statusCode: number; headers: Record<string, string>; body: string }>((resolve) => {
      const req: any = {
        method: event.httpMethod,
        url: event.path,
        path: event.path.replace("/.netlify/functions/server", "") || "/",
        headers: event.headers,
        body: event.body ? JSON.parse(event.body) : undefined,
        query: event.queryStringParameters || {},
      };

      const res: any = {
        statusCode: 200,
        headers: {} as Record<string, string>,
        body: "",
        status(code: number) {
          this.statusCode = code;
          return this;
        },
        setHeader(key: string, value: string) {
          this.headers[key] = value;
          return this;
        },
        set(key: string, value: string) {
          this.headers[key] = value;
          return this;
        },
        json(data: any) {
          this.headers["Content-Type"] = "application/json";
          this.body = JSON.stringify(data);
          resolve({ statusCode: this.statusCode, headers: this.headers, body: this.body });
        },
        send(data: string) {
          this.body = data;
          resolve({ statusCode: this.statusCode, headers: this.headers, body: this.body });
        },
        end(data?: string) {
          if (data) this.body = data;
          resolve({ statusCode: this.statusCode, headers: this.headers, body: this.body });
        },
      };

      app(req, res, () => {
        resolve({ statusCode: 404, headers: {}, body: "Not Found" });
      });
    });

    return response;
  } catch (error) {
    console.error("Serverless function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
