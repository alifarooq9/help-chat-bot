import { useState, type FC } from "react";

const Chat: FC = () => {
  const [messageInput, setMessageInput] = useState<string>("");

  return (
    <>
      <div className="flex-1 overflow-auto bg-gray-200"></div>
      <div className="flex h-12 w-full items-center px-5">
        <input
          type="text"
          onChange={(e) => setMessageInput(e.target.value)}
          value={messageInput}
          className="w-full bg-transparent placeholder:text-black placeholder:text-opacity-40 focus:outline-none"
          placeholder="Type your message here"
        />
        <button disabled={messageInput.length === 0}>
          <svg
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className={`h-7 w-7 ${
              messageInput.length === 0
                ? "fill-black opacity-40"
                : "fill-blue-600 opacity-100"
            } transition-all duration-500 ease-in-out`}
          >
            <path d="M227.7,48.3,175.3,234.2a15.9,15.9,0,0,1-14.1,11.6h-1.4a16,16,0,0,1-14.4-9.1l-35.7-75.4a4.1,4.1,0,0,1,.8-4.6l51.3-51.3a8,8,0,1,0-11.3-11.3L99.2,145.5a4.1,4.1,0,0,1-4.6.8l-75-35.5a16.6,16.6,0,0,1-9.5-15.6A15.9,15.9,0,0,1,21.8,80.7L208.1,28.2a16,16,0,0,1,17.7,6.5A16.7,16.7,0,0,1,227.7,48.3Z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Chat;
