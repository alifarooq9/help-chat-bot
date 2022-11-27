import { type Category } from "@prisma/client";
import { type Dispatch, type SetStateAction, type FC } from "react";
import type { MessageHistory, Step } from "../../types/message";

type Categories = {
  label: Category;
  name: string;
};

type Props = {
  messagesHistory: MessageHistory[];
  setMessagesHistory: Dispatch<SetStateAction<MessageHistory[]>>;
  setStep: Dispatch<SetStateAction<Step>>;
  setCurrentCategory: Dispatch<SetStateAction<Category>>;
};

const CategoryMessage: FC<Props> = ({
  messagesHistory,
  setMessagesHistory,
  setStep,
  setCurrentCategory,
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
    setCurrentCategory(category);
    setStep("QUESTION");
  };

  return (
    <div className="w-full">
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
    </div>
  );
};

export default CategoryMessage;
