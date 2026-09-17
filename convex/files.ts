import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const saveFile = mutation({
  args: {
    path: v.string(),
    storageId: v.id("_storage"),
    contentType: v.string(),
    size: v.number(),
  },
  handler: async (ctx, args) => {
    // Check if existing file with this path exists
    const existing = await ctx.db
      .query("staticFiles")
      .withIndex("by_path", (q) => q.eq("path", args.path))
      .first();

    if (existing) {
      // Delete old storage file
      try {
        await ctx.storage.delete(existing.storageId);
      } catch (e) {
        // Ignore deletion errors
      }
      await ctx.db.patch(existing._id, {
        storageId: args.storageId,
        contentType: args.contentType,
        size: args.size,
      });
      return existing._id;
    } else {
      return await ctx.db.insert("staticFiles", {
        path: args.path,
        storageId: args.storageId,
        contentType: args.contentType,
        size: args.size,
      });
    }
  },
});

export const getFile = query({
  args: {
    path: v.string(),
  },
  handler: async (ctx, args) => {
    let p = args.path;
    if (p === "" || p === "/") {
      p = "/index.html";
    }

    const file = await ctx.db
      .query("staticFiles")
      .withIndex("by_path", (q) => q.eq("path", p))
      .first();

    return file;
  },
});