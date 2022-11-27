import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const questionsRouter = router({
  add: publicProcedure
    .input(
      z
        .object({
          question: z.string(),
          id: z.string(),
        })
        .nullish()
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const addQuestion = await ctx.prisma.questions.create({
          data: {
            categoriesId: input?.id as string,
            question: input?.question as string,
          },
        });
        return addQuestion;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
});
