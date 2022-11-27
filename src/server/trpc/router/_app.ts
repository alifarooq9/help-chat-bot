import { router } from "../trpc";
import { questionAndAnswerRouter } from "./questionAndAnswer";

export const appRouter = router({
  questionAndAnswer: questionAndAnswerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
