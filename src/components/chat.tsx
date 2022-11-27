import { MutableRefObject, useEffect, useRef, useState, type FC } from "react";
import type { MessageHistory } from "../types/message";
import LatestMessage from "./latestMessage";
import { useInView, InView } from "react-intersection-observer";

const Chat: FC = () => {
  //all messages
  const [messagesHistory, setMessagesHistory] = useState<MessageHistory[]>([]);

  return (
    <>
      <div className="flex-1 overflow-auto p-8">
        <div className="flex max-w-xs flex-col">
          <p className="w-fit rounded-b-3xl rounded-tr-3xl bg-gray-200 p-4">
            Hi, I am ChatBot
          </p>
        </div>

        {messagesHistory.map((m) => (
          <div
            key={m.id}
            className={`flex ${
              m.from === "BOT" ? "justify-start" : "justify-end"
            }`}
          >
            <p
              className={`mt-3 w-fit max-w-xs rounded-b-3xl ${
                m.from === "BOT"
                  ? "rounded-tr-3xl bg-gray-200"
                  : "rounded-tl-3xl bg-blue-600 text-white"
              } p-4`}
            >
              {m.message}
            </p>
          </div>
        ))}

        <LatestMessage
          messagesHistory={messagesHistory}
          setMessagesHistory={setMessagesHistory}
        />
        <InView
          as="div"
          onChange={(inView, entry) => {
            console.log(entry.target.scrollIntoView());
          }}
        ></InView>
      </div>
    </>
  );
};

export default Chat;
