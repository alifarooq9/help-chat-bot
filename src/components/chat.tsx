import { useState, type FC } from "react";
import type { MessageHistory } from "../types/message";
import LatestMessage from "./latestMessage";

const Chat: FC = () => {
  //message input state
  const [messageInput, setMessageInput] = useState<string>("");

  //all messages
  const [messagesHistory, setMessagesHistory] = useState<MessageHistory[]>([]);

  return (
    <>
      <div className="flex-1 overflow-auto p-8">
        {messagesHistory.map((m) => (
          <div key={m.id}>{m.message}</div>
        ))}

        <LatestMessage
          messagesHistory={messagesHistory}
          setMessagesHistory={setMessagesHistory}
        />
      </div>
    </>
  );
};

export default Chat;
