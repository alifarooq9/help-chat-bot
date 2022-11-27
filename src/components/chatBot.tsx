import Image from "next/image";
import { useState, type FC } from "react";
import helpIcon from "../../public/help.svg";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Chat from "./chat";

const ChatBot: FC = () => {
  //chat bot open state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //chat bot open animations
  const chatBotVarients: Variants = {
    open: {
      opacity: 1,
      bottom: "0px",
    },
    close: {
      opacity: 0,
      bottom: "-70px",
    },
  };

  return (
    <div className="fixed bottom-6 right-6">
      <div className="relative">
        {/* chat bot icon */}
        {isOpen === false && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-blue-600 p-2 transition-colors duration-300 ease-in-out hover:bg-blue-500"
          >
            <Image src={helpIcon} alt="help" />
          </button>
        )}

        {/* chat bot */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={chatBotVarients}
              animate="open"
              initial="close"
              exit="close"
              transition={{ duration: 0.2 }}
              className="fixed bottom-0 right-0 h-screen w-screen overflow-hidden bg-white drop-shadow-2xl sm:absolute sm:bottom-16 sm:h-[40rem] sm:max-w-md sm:rounded-2xl"
            >
              <div className="relative flex h-full flex-col">
                {/* top chat ui */}
                <div className="flex h-24 w-full flex-col justify-center bg-white px-6">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center space-x-5">
                      <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-blue-600 p-2 transition-colors duration-300 ease-in-out hover:bg-blue-500">
                        <Image src={helpIcon} alt="help" />
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold">ChatBot</h5>
                        <div className="flex items-center space-x-1">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                          <p className="text-sm opacity-60">online</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsOpen(false)}
                      className="opacity-40 transition-opacity duration-300 ease-in-out hover:opacity-80"
                    >
                      <svg
                        data-name="Layer 1"
                        height="200"
                        id="Layer_1"
                        viewBox="0 0 200 200"
                        width="200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                      >
                        <title />
                        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* chat */}
                <Chat />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChatBot;
