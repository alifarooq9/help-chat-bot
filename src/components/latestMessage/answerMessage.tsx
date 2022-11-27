import { type Dispatch, type SetStateAction, type FC } from "react";
import type { MessageHistory, Step } from "../../types/message";
import { trpc } from "../../utils/trpc";

type Props = {
  messagesHistory: MessageHistory[];
  setMessagesHistory: Dispatch<SetStateAction<MessageHistory[]>>;
  setStep: Dispatch<SetStateAction<Step>>;
  currentQuestionId: string;
};

const AnswerMessage: FC<Props> = ({
  messagesHistory,
  setMessagesHistory,
  setStep,
  currentQuestionId,
}) => {
  //answer route
  const { data, isFetching } = trpc.questionAndAnswer.getAnswer.useQuery({
    questionId: currentQuestionId,
  });

  // go back on step
  const handleGoBackCategories = () => {
    setMessagesHistory([
      ...messagesHistory,
      {
        from: "BOT",
        id: data?.id as string,
        message: !data
          ? `Sorry there are no question regarding your question`
          : data.answer,
      },
    ]);
    setStep("CATEGORY");
  };

  const handleGoBackQuestions = () => {
    setMessagesHistory([
      ...messagesHistory,
      {
        from: "BOT",
        id: data?.id as string,
        message: !data
          ? `Sorry there are no question regarding your question`
          : data.answer,
      },
    ]);
    setStep("QUESTION");
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
            {!data
              ? `Sorry there are no question regarding your question`
              : data.answer}
          </p>
          <div className="mt-2 flex max-w-xs flex-col items-center space-y-2">
            <button
              onClick={() => handleGoBackQuestions()}
              key="go-back"
              className="rounded-3xl border border-blue-600 px-4 py-1.5 text-sm text-blue-600 transition-colors duration-300 ease-in-out hover:bg-blue-100"
            >
              Go back to questions
            </button>
            <button
              onClick={() => handleGoBackCategories()}
              key="go-back"
              className="rounded-3xl border border-blue-600 px-4 py-1.5 text-sm text-blue-600 transition-colors duration-300 ease-in-out hover:bg-blue-100"
            >
              Go back to Categories
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AnswerMessage;
