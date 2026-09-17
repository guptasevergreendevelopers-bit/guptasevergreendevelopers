import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();

http.route({
  pathPrefix: "/",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const url = new URL(request.url);
    let pathname = decodeURIComponent(url.pathname);

    // Try exact path first
    let file = await ctx.runQuery(api.files.getFile, { path: pathname });

    // If not found and not a direct file extension, fallback to index.html for SPA client-side routing
    if (!file && !pathname.includes(".")) {
      file = await ctx.runQuery(api.files.getFile, { path: "/index.html" });
    }

    if (!file) {
      return new Response("404 Not Found - Gupta's Evergreen Developers", { 
        status: 404,
        headers: { "Content-Type": "text/plain" }
      });
    }

    const blob = await ctx.storage.get(file.storageId);
    if (!blob) {
      return new Response("File not found in storage", { status: 404 });
    }

    const headers: Record<string, string> = {
      "Content-Type": file.contentType,
      "Cache-Control": pathname.startsWith("/assets/") 
        ? "public, max-age=31536000, immutable" 
        : "public, max-age=300",
      "Access-Control-Allow-Origin": "*",
    };

    return new Response(blob, {
      status: 200,
      headers,
    });
  }),
});

export default http;