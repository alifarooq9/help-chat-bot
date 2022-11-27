import { type Category } from "@prisma/client";
import { type Dispatch, type SetStateAction, type FC } from "react";
import type { MessageHistory, Step } from "../../types/message";
import { trpc } from "../../utils/trpc";

type Props = {
  messagesHistory: MessageHistory[];
  setMessagesHistory: Dispatch<SetStateAction<MessageHistory[]>>;
  setStep: Dispatch<SetStateAction<Step>>;
  currentCategory: Category;
};

const QuestionMessage: FC<Props> = ({
  currentCategory,
  messagesHistory,
  setMessagesHistory,
  setStep,
}) => {
  //question route
  const { data, isFetching } = trpc.questionAndAnswer.getQuestions.useQuery({
    category: currentCategory,
  });

  const handleOnClickQuestion = async (id: string, question: string) => {
    setMessagesHistory([
      ...messagesHistory,
      {
        from: "BOT",
        id: id,
        message:
          data?.length === 0
            ? `Sorry there are no question regarding ${currentCategory} category`
            : "Please select the question you want the answer of.",
      },
      {
        from: "PERSON",
        id: "asdasd",
        message: question,
      },
    ]);
    setStep("ANSWER");
  };

  return (
    <div className="w-full">
      {isFetching ? (
        <p className="mt-3 w-fit max-w-xs rounded-b-3xl rounded-tr-3xl bg-gray-200 p-4">
          ChatBot is typing...
        </p>
      ) : (
        <>
          <p className="mt-3 w-fit max-w-xs rounded-b-3xl rounded-tr-3xl bg-gray-200 p-4">
            {data?.length === 0
              ? `Sorry there are no question regarding ${currentCategory} category`
              : "Please select the question you want the answer of."}
          </p>
          <div className="mt-2 flex max-w-xs flex-col items-center space-y-2">
            {data &&
              data.map((q) => (
                <button
                  onClick={() => handleOnClickQuestion(q.id, q.question)}
                  key={q.id}
                  className="rounded-3xl border border-blue-600 px-4 py-1.5 text-sm text-blue-600 transition-colors duration-300 ease-in-out hover:bg-blue-100"
                >
                  {q.question}
                </button>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionMessage;
