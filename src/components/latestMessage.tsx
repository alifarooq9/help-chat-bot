import { type Dispatch, type SetStateAction, type FC } from "react";
import type { MessageHistory } from "../types/message";

type Props = {
  messagesHistory: MessageHistory[];
  setMessagesHistory: Dispatch<SetStateAction<MessageHistory[]>>;
};

const LatestMessage: FC<Props> = ({ messagesHistory, setMessagesHistory }) => {
  return <div>LatestMessage</div>;
};

export default LatestMessage;
