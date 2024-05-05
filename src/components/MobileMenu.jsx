import React, { useState } from "react";
import {
  PiCaretRight,
  PiQuestionBold,
  PiUserBold,
  PiXBold,
} from "react-icons/pi";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { converseBlack } from "../assets/images";
import { Button } from "../components";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="flex h-screen flex-col items-start justify-start gap-20">
      <div className="flex w-full justify-end">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <PiXBold className="h-[30px] w-[30px]" />
        </button>
      </div>
      <div className="flex w-full flex-col gap-16 max-md:gap-10">
        <nav className="flex flex-col gap-5">
          {navLinks.map((navlink) => (
            <Link
              to={navlink.href}
              key={navlink.label}
              className={`flex justify-between text-2xl font-semibold opacity-90 hover:opacity-100 ${navlink.special && "text-red-600"}`}
            >
              {navlink.label}
              <PiCaretRight />
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center justify-between ">
            <span className="flex items-center gap-2 text-lg font-semibold">
              <PiUserBold className="text-xl" />
              Sign in
            </span>
            <PiCaretRight className="text-2xl" />
          </Link>
          <Link to="/" className="flex items-center justify-between ">
            <span className="flex items-center gap-2 text-lg font-semibold">
              <PiQuestionBold className="text-xl" />
              Get help
            </span>
            <PiCaretRight className="text-2xl" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 text-center">
        <img src={converseBlack} alt="converse black logo" />
        <h4 className="text-2xl font-bold capitalize">Create an Account</h4>
        <p className="mb-3 w-[70%]">
          Get free shipping & returns, exclusive offers, and better shopping
          experiences.
        </p>
        <Button
          buttonCss="bg-black text-white w-full justify-center"
          label="Sign Up"
        />
      </div>
    </div>
  );
};

export default MobileMenu;
