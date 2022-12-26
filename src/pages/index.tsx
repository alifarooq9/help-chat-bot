import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Help ChatBot</title>
        <meta
          name="description"
          content="Help ChatBot created by alimuhammadfp5"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="flex min-h-screen w-full flex-col items-center justify-center py-20 px-6">
        <h4 className="text-center text-xl font-medium">
          Try help ChatBot in bottom left corner of the screen
        </h4>
        <p className="mt-5 text-black text-opacity-70">
          CreatedBy:{" "}
          <span className="font-medium text-black text-opacity-100">
            {" "}
            Ali Muhammad
          </span>
        </p>
        <p className="text-black text-opacity-70">
          GitHub:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/alidotm"
            className="font-medium text-blue-600"
          >
            github/alidotm
          </a>
        </p>
        <p className="text-black text-opacity-70">
          Email:{" "}
          <span className="font-medium text-black text-opacity-100">
            hello@alidotm.me
          </span>
        </p>
        <p className="text-black text-opacity-70">
          Website:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.alidotm.me/"
            className="font-medium text-blue-600"
          >
            alidotm.me
          </a>
        </p>
      </main>
    </>
  );
};

export default Home;
