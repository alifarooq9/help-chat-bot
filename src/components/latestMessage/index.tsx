import { type Dispatch, type SetStateAction, type FC, useState } from "react";
import type { MessageHistory, Step } from "../../types/message";
import CategoryMessage from "./categoryMessage";

type Props = {
  messagesHistory: MessageHistory[];
  setMessagesHistory: Dispatch<SetStateAction<MessageHistory[]>>;
};

const LatestMessage: FC<Props> = ({ messagesHistory, setMessagesHistory }) => {
  const [step, setStep] = useState<Step>("CATEGORY");

  if (step === "CATEGORY") {
    return (
      <CategoryMessage
        messagesHistory={messagesHistory}
        setMessagesHistory={setMessagesHistory}
        setStep={setStep}
      />
    );
  }

  return <div>Something went wrong</div>;
};

export default LatestMessage;
