import Image from "next/image";
import { type FC } from "react";
import helpIcon from "../../public/help.svg";

const ChatBot: FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-blue-600 p-2 transition-colors duration-300 ease-in-out hover:bg-blue-500">
      <Image src={helpIcon} alt="help" />
    </div>
  );
};

export default ChatBot;
