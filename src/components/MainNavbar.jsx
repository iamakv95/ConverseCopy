import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks, userIcons } from "../constants";
import { PiMagnifyingGlass, PiTextIndent, PiTextOutdent } from "react-icons/pi";
import { converseicon } from "../assets/images";

const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex w-full items-center justify-between px-8 max-xl:px-2">
      <div className="flex w-[12%] items-center justify-start gap-3">
        <button
          className="hidden items-center justify-center max-lg:flex"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <PiTextOutdent className="h-[30px] w-[30px]" />
          ) : (
            <PiTextIndent className="h-[35px] w-[30px]" />
          )}
        </button>
        <Link to="/" className="flex items-center justify-start gap-1">
          <span className="text-[17px] font-bold uppercase">Converse</span>
          <img
            src={converseicon}
            alt="logo"
            className="h-[17px] w-[17px] object-contain"
          />
        </Link>
      </div>
      <nav className="flex w-[44%] items-center justify-start gap-4 max-lg:hidden">
        {navLinks.map((navlink) => (
          <Link
            to={navlink.href}
            key={navlink.label}
            className={`text-sm font-semibold ${navlink.special && "text-red-600"}`}
          >
            {navlink.label}
          </Link>
        ))}
      </nav>
      <div className="flex w-[44%] items-center justify-end gap-4 max-lg:w-[74%]">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="text-sm font-semibold">
            Sign in
          </Link>
          {userIcons.map((usericon) => (
            <Link to={usericon.href} key={usericon.key}>
              <usericon.iconURL className="h-[20px] w-[20px]" />
            </Link>
          ))}
        </div>
        <div className="flex items-stretch bg-black px-4">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search"
            className="w-[78%] bg-transparent font-semibold transition-all duration-700 placeholder:text-white max-md:hidden"
          />
          <button className="flex w-[22%] items-center justify-center bg-transparent py-4 max-md:w-[100%]">
            <PiMagnifyingGlass className="h-[20px] w-[20px] text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
