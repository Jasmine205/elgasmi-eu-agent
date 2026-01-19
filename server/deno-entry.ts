/**
 * Deno Deploy Entry Point
 * Minimal HTTP server for Deno Deploy platform
 */

import { Hono } from "https://deno.land/x/hono@v4.0.0/mod.ts";
import { serveStatic } from "https://deno.land/x/hono@v4.0.0/middleware.ts";
import { cors } from "https://deno.land/x/hono@v4.0.0/middleware.ts";

const app = new Hono();

// CORS middleware
app.use("*", cors({
  origin: "*",
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
}));

// Health check endpoint
app.get("/api/health", (c) => {
  return c.json({
    status: "ok",
    platform: "deno-deploy",
    timestamp: new Date().toISOString(),
  });
});

// API routes placeholder
app.all("/api/*", (c) => {
  return c.json({
    message: "API endpoint",
    path: c.req.path,
    method: c.req.method,
    note: "Configure your tRPC/API routes here",
  });
});

// Serve static files from dist/public
app.use("/*", serveStatic({ root: "./dist/public" }));

// SPA fallback
app.get("*", async (c) => {
  try {
    const html = await Deno.readTextFile("./dist/public/index.html");
    return c.html(html);
  } catch {
    return c.text("Not Found", 404);
  }
});

// Start server
const port = Number(Deno.env.get("PORT")) || 8000;
console.log(`Server running on http://localhost:${port}`);

Deno.serve({ port }, app.fetch);
