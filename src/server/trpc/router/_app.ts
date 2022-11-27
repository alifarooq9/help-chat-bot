import { answerRouter } from './answers';
import { router } from "../trpc";
import { categoriesRouter } from "./router";
import { questionsRouter } from "./questions";

export const appRouter = router({
  categories: categoriesRouter,
  questions: questionsRouter,
  answer: answerRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
