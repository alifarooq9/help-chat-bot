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

const QuestionMessage: FC<Props> = ({ currentCategory }) => {
  //question route
  const { data, isFetching } = trpc.questionAndAnswer.getQuestions.useQuery({
    category: currentCategory,
  });

  

  return (
    <div className="w-full">
      {isFetching ? (
        <p className="mt-3 w-fit max-w-xs rounded-b-3xl rounded-tr-3xl bg-gray-200 p-4">
          ChatBot is typing...
        </p>
      ) : (
        <>
          <p className="mt-3 w-fit max-w-xs rounded-b-3xl rounded-tr-3xl bg-gray-200 p-4">
            Please select the category you want to ask question from.
          </p>
          <div className="mt-2 flex max-w-xs flex-col items-center space-y-2">
            {data &&
              data.map((c) => (
                <button
                  //   onClick={() => handleOnClickQuestions(c.label, c.name)}
                  key={c.id}
                  className="rounded-3xl border border-blue-600 px-4 py-1.5 text-sm text-blue-600 transition-colors duration-300 ease-in-out hover:bg-blue-100"
                >
                  {c.question}
                </button>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionMessage;
