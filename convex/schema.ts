import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  staticFiles: defineTable({
    path: v.string(),
    storageId: v.id("_storage"),
    contentType: v.string(),
    size: v.number(),
  }).index("by_path", ["path"]),
});