import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router";

const Header = () => {
  return (
    <nav>
      <div
        className="flex items-center justify-center gap-4"
        style={{ backgroundImage: "url('/images/more/15.jpg')" }}
      >
        <img
          className="w-[75px]"
          src="/images/more/logo1.png"
          alt="logo image"
        />
        <h1 className="text-[3.75rem] font-rancho text-white">
          Espresso Emporium
        </h1>
      </div>
    </nav>
  );
};

export default Header;
