/**
 * Cloudflare Pages Functions
 * Catch-all handler for API routes
 */

interface Env {
  ASSETS: Fetcher;
  DATABASE_URL?: string;
  JWT_SECRET?: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env, params } = context;
  const url = new URL(request.url);
  const path = params.path ? (Array.isArray(params.path) ? params.path.join("/") : params.path) : "";

  // Health check
  if (url.pathname === "/api/health" || path === "health") {
    return Response.json({
      status: "ok",
      platform: "cloudflare-pages",
      timestamp: new Date().toISOString(),
    });
  }

  // CORS headers
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  // Handle preflight
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // API routes placeholder
  if (url.pathname.startsWith("/api/")) {
    return Response.json(
      {
        message: "API endpoint",
        path: url.pathname,
        method: request.method,
        note: "Configure your API routes here",
      },
      { headers: corsHeaders }
    );
  }

  // Fallback to static assets
  return env.ASSETS.fetch(request);
};
