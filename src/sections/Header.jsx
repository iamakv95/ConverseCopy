import React from "react";
import { NovbarTop, MainNavbar } from "../components";

const Header = () => {
  return (
    <div className="relative h-auto w-full">
      <div className="fixed left-0 right-0 top-0">
        <NovbarTop />
        <MainNavbar />
      </div>
    </div>
  );
};

export default Header;
