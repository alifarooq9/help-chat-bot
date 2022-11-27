import { router } from "../trpc";
import { categoriesRouter } from "./categories";
import { questionsRouter } from "./questions";

export const appRouter = router({
  categories: categoriesRouter,
  questions: questionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
