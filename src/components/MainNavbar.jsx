import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks, userIcons } from "../constants";
import {
  PiMagnifyingGlass,
  PiTextIndent,
  PiTextOutdent,
  PiXBold,
} from "react-icons/pi";
import { converseicon } from "../assets/images";
import { MobileMenu, SearchBox } from "../components";

const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="flex w-full items-center justify-between bg-white px-8 max-xl:px-2">
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
        {menuOpen && (
          <div className="absolute left-0 top-0 z-20 w-[35%] border-r-4 border-r-gray-700 bg-white px-4 py-4 transition-all duration-500 max-xl:w-[55%] max-md:w-full">
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        )}
        <Link to="/" className="flex items-center justify-start gap-1">
          <span className="text-[17px] font-bold uppercase">Converse</span>
          <img
            src={converseicon}
            alt="logo"
            className="h-[17px] w-[17px] object-contain"
          />
        </Link>
      </div>
      <nav className="flex w-[44%] items-center justify-start gap-6 max-lg:hidden">
        {navLinks.map((navlink) => (
          <Link
            to={navlink.href}
            key={navlink.label}
            className={`text-sm font-semibold opacity-90 hover:opacity-100 ${navlink.special && "text-red-600"}`}
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
        <div className="flex items-center bg-black px-4">
          <input
            type="text"
            disabled
            name="search"
            id="search"
            placeholder="search"
            className={`w-[78%] bg-transparent font-semibold text-white transition-all duration-700 placeholder:text-white focus:outline-none max-md:hidden ${searchOpen ? "hidden" : "block"}`}
          />
          <button
            className={`${searchOpen ? "w-[100%]" : ""}flex w-[22%] items-center justify-end bg-transparent py-4 max-md:w-[100%]`}
            onClick={() => setSearchOpen((prev) => !prev)}
          >
            {searchOpen ? (
              <PiXBold className="h-[20px] w-[20px] text-white" />
            ) : (
              <PiMagnifyingGlass className="h-[20px] w-[20px] text-white" />
            )}
          </button>
          {searchOpen && (
            <div className="absolute left-0 right-0 top-[82px] z-10 h-screen  w-full border-t border-gray-300 bg-white px-4 py-4 transition-all duration-500">
              <SearchBox />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
