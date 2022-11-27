import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import ChatBot from "../components/chatBot";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <ChatBot />
      <Component {...pageProps} />
    </div>
  );
};

export default trpc.withTRPC(MyApp);
