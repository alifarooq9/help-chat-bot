import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const categoriesRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const getAllCategories = await ctx.prisma.categories.findMany();
      return getAllCategories;
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong",
      });
    }
  }),
  add: publicProcedure
    .input(
      z
        .object({
          label: z.enum(["SPORTS", "TECH", "MOVIES"]),
          name: z.string(),
        })
        .nullish()
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const addCategory = await ctx.prisma.categories.create({
          data: {
            label: input?.label as string,
            name: input?.name as string,
          },
        });

        return addCategory;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
});
