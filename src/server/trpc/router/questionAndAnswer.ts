import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const questionAndAnswerRouter = router({
  add: publicProcedure
    .input(
      z.object({
        question: z.string(),
        answer: z.string(),
        category: z.enum(["MOVIES", "SPORTS", "TECH"]),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const addQuestionAndAnswer = await ctx.prisma.questions.create({
          data: {
            question: input?.question,
            category: input?.category,
            answer: {
              create: {
                answer: input?.answer,
              },
            },
          },
        });
        return addQuestionAndAnswer;
      } catch (error) {
        console.log(error);

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong on server",
        });
      }
    }),
});
