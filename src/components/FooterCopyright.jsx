import React from "react";
import { Link } from "react-router-dom";

const FooterCopyright = () => {
  return (
    <div className="bg-black py-2 text-xs text-gray-400">
      <div className="flex w-full flex-1 flex-wrap items-start justify-between px-4 py-4">
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/" className="hover:text-white">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-white">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <p>Copyright &copy; 2023 Converse</p>
      </div>
    </div>
  );
};

export default FooterCopyright;
