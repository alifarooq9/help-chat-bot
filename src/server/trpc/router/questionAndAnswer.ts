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
          cause: error,
          message: "Something went wrong on server",
        });
      }
    }),
  getQuestions: publicProcedure.query(async ({ ctx }) => {
    try {
      const getQuestions = await ctx.prisma.questions.findMany();
      return getQuestions;
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        cause: error,
        message: "Something went wrong on server",
      });
    }
  }),
  getAnswer: publicProcedure
    .input(
      z.object({
        questionId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      try {
        const getAnswer = await ctx.prisma.answer.findFirst({
          where: {
            questionsId: input?.questionId,
          },
        });
        return getAnswer;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: error,
          message: "Something went wrong on server",
        });
      }
    }),
});
