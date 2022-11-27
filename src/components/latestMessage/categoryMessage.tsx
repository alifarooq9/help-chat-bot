import { type Category } from "@prisma/client";
import { type Dispatch, type SetStateAction, type FC, useState } from "react";
import type { MessageHistory, Step } from "../../types/message";
import { trpc } from "../../utils/trpc";

type Categories = {
  label: Category;
  name: string;
};

type Props = {
  messagesHistory: MessageHistory[];
  setMessagesHistory: Dispatch<SetStateAction<MessageHistory[]>>;
  setStep: Dispatch<SetStateAction<Step>>;
};

const CategoryMessage: FC<Props> = ({
  messagesHistory,
  setMessagesHistory,
  setStep,
}) => {
  const categories: Categories[] = [
    {
      label: "MOVIES",
      name: "Movies",
    },
    {
      label: "SPORTS",
      name: "Sports",
    },
    {
      label: "TECH",
      name: "Tech",
    },
  ];
  const getQuestions = trpc.questionAndAnswer.getQuestions.useMutation();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const handleOnClickCategory = async (
    category: Category,
    categoryName: string
  ) => {
    setMessagesHistory([
      ...messagesHistory,
      {
        from: "BOT",
        id: category,
        message: "Please select the category you want to ask question from.",
      },
      {
        from: "PERSON",
        id: "sdasd",
        message: categoryName,
      },
    ]);
    setIsFetching(true);
    try {
      await getQuestions.mutateAsync({
        category,
      });
      setStep("QUESTION");
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  };

  return (
    <div className="w-full">
      {isFetching ? (
        "IsFetching..."
      ) : (
        <>
          <p className="mt-3 w-fit max-w-xs rounded-b-3xl rounded-tr-3xl bg-gray-200 p-4">
            Please select the category you want to ask question from.
          </p>
          <div className="mt-2 flex items-center">
            {categories.map((c) => (
              <button
                onClick={() => handleOnClickCategory(c.label, c.name)}
                key={c.label}
                className="m-1 rounded-3xl border border-blue-600 px-4 py-1.5 text-sm text-blue-600 transition-colors duration-300 ease-in-out hover:bg-blue-100"
              >
                {c.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryMessage;
