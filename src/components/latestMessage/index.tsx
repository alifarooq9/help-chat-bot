import {
  type Dispatch,
  type SetStateAction,
  type FC,
  useState,
  useEffect,
} from "react";
import type {
  CurrentBotMessage,
  MessageHistory,
  Step,
} from "../../types/message";
import { trpc } from "../../utils/trpc";
import { format } from "date-fns";

type Props = {
  messagesHistory: MessageHistory[];
  setMessagesHistory: Dispatch<SetStateAction<MessageHistory[]>>;
};

const LatestMessage: FC<Props> = ({ messagesHistory, setMessagesHistory }) => {
  //update to answer

  return <div>Reset</div>;
};

export default LatestMessage;
