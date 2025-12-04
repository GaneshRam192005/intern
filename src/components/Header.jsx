import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [color, setColor] = useState(true);

  return (
    <header
      className={`w-full p-4 flex justify-between items-center shadow 
        ${color ? "bg-black" : "bg-blue-600"}`}
    >
      <h1 className="text-xl font-bold text-white cursor-pointer">
        YonderBotz
      </h1>

      <nav className="flex space-x-6 text-gray-200 font-medium">
        <Link to="/about" className="hover:text-white transition">
          About
        </Link>
        <Link to="/profile" className="hover:text-white transition">
          Profile
        </Link>
        <Link to="/form" className="hover:text-white transition">
          Form
        </Link>
      </nav>

      <button
        onClick={() =>
             setColor(!color)}
        className="px-3 py-1 bg-white text-black cursor-pointer"
      >
       chage color
      </button>
    </header>
  );
};

export default Header;
