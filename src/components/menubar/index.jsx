import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-amber-700 py-3">
        <div className="container flex justify-between items-center">
          <div className="px-16">
            <h4 className="text-yellow-300 font-sans font-bold text-xl">
              <span className="text-cyan-300">Note</span>Book
            </h4>
          </div>
          <div className="px-16">
            <Link
              to="/"
              className="text-white font-mono font-bold text-lg px-4"
            >
              Home
            </Link>
            <Link
              to="/task-view"
              className="text-white font-mono font-bold text-lg px-4"
            >
              Task-View
            </Link>
            <Link to="/contact" className="text-white font-mono font-bold text-lg ps-4">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
