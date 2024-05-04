import React from "react";
import { newsletter } from "../constants";
import Button from "../components/Button";

const Newsletter = () => {
  return (
    <div className="flex flex-col px-8 pb-6 max-xl:px-0">
      <div className="grid w-full flex-1 grid-cols-2 justify-center max-md:grid-cols-1">
        <div className="flex flex-1 flex-col max-md:w-full">
          <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-neutral-300 py-20 text-center text-black max-md:bg-black max-md:px-3 max-md:py-10 max-md:text-white">
            <div className="flex flex-col items-center justify-center">
              <h2 className="leading-2 flex text-6xl font-black uppercase max-lg:text-6xl">
                {newsletter.titletop}
              </h2>
              <h2 className="leading-2 flex items-center text-6xl font-black uppercase max-lg:text-6xl">
                {newsletter.titlebottom}
                <img
                  src={newsletter.imgBig}
                  alt="logo"
                  className="object-stretch hidden h-[50px] w-[50px] self-center max-md:block"
                />
              </h2>
            </div>
            <p className="mb-2 w-[70%] max-md:w-full">{newsletter.desc}</p>
            <Button
              label={newsletter.buttonLabel}
              src={newsletter.src}
              buttonCss={
                "border-gray-900 text-black bg-transparent justify-center max-md:w-full max-md:text-gray-200 max-md:border-gray-400 "
              }
            />
          </div>
        </div>
        <div className="flex flex-1 justify-center self-stretch bg-black max-md:hidden">
          <img src={newsletter.imgBig} alt="hero big" className="w-[40%]" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
