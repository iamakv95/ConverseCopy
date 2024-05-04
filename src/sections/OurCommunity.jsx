import React from "react";
import { ourcommunity } from "../constants";
import Button from "../components/Button";

const OurCommunity = () => {
  return (
    <div className="flex flex-col px-8 py-6 max-xl:px-0">
      <h2 className="text-2xl font-bold max-xl:px-4 max-md:text-xl">
        From Our Community
      </h2>
      <div className="pt-6">
        <div className="flex w-full flex-1 justify-center max-md:flex-col">
          <div className="flex w-1/2 flex-1 justify-center self-stretch max-md:w-full">
            <img src={ourcommunity.imgBig} alt="hero big" className="w-full" />
          </div>
          <div className="flex w-1/2 flex-1 flex-col max-md:w-full">
            <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-neutral-300 px-4 py-20 text-center text-black max-md:py-10">
              <h2 className="text-3xl max-lg:text-2xl">{ourcommunity.title}</h2>
              <p>{ourcommunity.desc}</p>
              <Button
                label={ourcommunity.buttonLabel}
                buttonCss={
                  "border-black text-white bg-black self-center hidden max-md:block"
                }
              />
            </div>
            <div className="max-md:hidden">
              <img
                src={ourcommunity.imgSmall}
                alt="hero small"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommunity;
