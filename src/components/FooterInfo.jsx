import React, { useState } from "react";
import { footerLinks, newsletter, socialMedia } from "../constants";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { payment } from "../assets/images";

const FooterInfo = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showFollowUs, setShowFollowUs] = useState(false);
  const [showGetHelp, setShowGetHelp] = useState(false);

  return (
    <div className="flex">
      <div className="flex w-full flex-1 flex-wrap items-start justify-between px-4 pb-8 pt-4">
        <div className="flex w-1/3 flex-1 flex-col items-start justify-center gap-3 border-b-gray-500 py-3 max-md:w-full max-md:border-b">
          <div className="flex w-full items-center justify-between">
            <h5 className="font-semibold">Never Miss a Beat</h5>
            <button
              className="hidden max-md:block"
              onClick={() => setShowNewsletter((prev) => !prev)}
            >
              {showNewsletter ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <div
            className={`flex flex-col gap-3 ${showNewsletter ? "max-md:flex" : "max-md:hidden"}`}
          >
            <p>{newsletter.desc}</p>
            <div className="items-strech flex w-full flex-1 justify-center">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full border border-b-2 border-gray-200 border-b-gray-500 px-2 placeholder:text-xs hover:border-b-gray-950 focus:outline-none"
              />
              <button className="bg-black p-3">
                <newsletter.iconURL className="text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-1/3 flex-col items-start justify-center gap-3 border-b-gray-500 py-3 pl-24 max-xl:pl-16 max-lg:pl-8 max-md:w-full max-md:border-b max-md:pl-0">
          <div className="flex w-full items-center justify-between">
            <h5 className="font-semibold">Follow Us</h5>
            <button
              className="hidden max-md:block"
              onClick={() => setShowFollowUs((prev) => !prev)}
            >
              {showFollowUs ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <div
            className={`flex items-center ${showFollowUs ? "max-md:flex" : "max-md:hidden"}`}
          >
            {socialMedia.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className="border border-gray-300 p-4"
              >
                <item.iconURL className="h-[12px] w-[12px] object-contain" />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-1/3 flex-col items-start justify-center gap-3 border-b-gray-500 py-3 max-md:w-full max-md:border-b-0">
          <div className="flex w-full items-center justify-between">
            <h5 className="font-semibold">Get Help</h5>
            <button
              className="hidden max-md:block"
              onClick={() => setShowGetHelp((prev) => !prev)}
            >
              {showGetHelp ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <div
            className={`flex flex-col gap-3 ${showGetHelp ? "max-md:flex" : "max-md:hidden"}`}
          >
            <div className="grid grid-cols-2 items-center gap-x-8 gap-y-2">
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm max-md:text-xs"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <img src={payment} alt="payment" className="h-[45px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
