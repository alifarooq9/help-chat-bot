import { type questions } from "@prisma/client";

export type MessageHistory = {
  from: "BOT" | "PERSON";
  id: string;
  message: string;
};

export type Step = "INITIAL" | "CATEGORY" | "QUESTION" | "ANSWER";

export type CurrentBotMessage = {
  message: string;
  step: Step;
  questions: questions[] | undefined;
  createAt: Date;
};
