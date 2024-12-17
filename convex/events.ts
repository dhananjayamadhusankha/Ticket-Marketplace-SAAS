import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
    args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("events")
      .filter((q) => q.eq(q.field("is_cancelled"), undefined))
      .order("desc")
      .collect();
  },
});
