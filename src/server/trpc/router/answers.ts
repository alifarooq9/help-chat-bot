import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const answerRouter = router({
  add: publicProcedure
    .input(
      z
        .object({
          answer: z.string(),
          id: z.string(),
        })
        .nullish()
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const addQuestion = await ctx.prisma.answer.create({
          data: {
            questionsId: input?.id as string,
            answer: input?.answer as string,
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
