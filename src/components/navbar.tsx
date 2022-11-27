import { type FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 flex w-full items-center justify-center py-5">
      <h1 className="text-2xl font-bold">
        Help <span className="text-blue-600">ChatBot</span>
      </h1>
    </nav>
  );
};

export default Navbar;
