export type MessageHistory = {
  from: "BOT" | "PERSON";
  id: string;
  message: string;
};

export type Step = "CATEGORY" | "QUESTION" | "ANSWER";
