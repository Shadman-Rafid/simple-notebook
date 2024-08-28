import React from "react";
import { Link } from "react-router-dom";
import { SlNotebook } from "react-icons/sl";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-rose-700 py-3">
        <div className="container flex justify-between items-center">
          <div className="px-16 flex">
            <SlNotebook className="w-8 h-8 text-white hover:text-yellow-300" />
            <h4 className="text-yellow-300 font-sans font-bold text-2xl hover:underline underline-offset-4 hover:text-fuchsia-200">
              <span className="text-cyan-300">Note</span>Book
            </h4>
          </div>
          <div className="px-16">
            <Link
              to="/"
              className="text-white font-mono font-bold text-lg px-4 hover:text-yellow-300 hover:text-xl"
            >
              Home
            </Link>
            <Link
              to="/task-view"
              className="text-white font-mono font-bold text-lg px-4 hover:text-yellow-300 hover:text-xl"
            >
              Task-View
            </Link>
            <Link
              to="/contact"
              className="text-white font-mono font-bold text-lg ps-4 hover:text-yellow-300 hover:text-xl"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
