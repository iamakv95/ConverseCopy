import React from "react";
import { summerlook } from "../constants";
import Button from "../components/Button";

const SummerLook = () => {
  return (
    <div className="flex flex-col px-8 py-6 max-xl:px-0">
      <h2 className="text-2xl font-bold max-xl:px-4 max-md:text-xl">
        Refresh Your Summer Look
      </h2>
      <div className="pt-6">
        <div className="flex w-full flex-1 justify-center max-md:flex-col">
          <div className="flex w-1/2 flex-1 justify-center self-stretch max-md:w-full">
            <img src={summerlook.imgBig} alt="hero big" className="w-full" />
          </div>
          <div className="flex w-1/2 flex-1 flex-col max-md:w-full">
            <div className="flex flex-1 flex-col justify-center gap-4 bg-orange-900 px-4 py-20 text-white max-md:py-10">
              <h2 className="text-3xl max-lg:text-2xl">{summerlook.title}</h2>
              <p>{summerlook.desc}</p>
              <Button
                label={summerlook.buttonLabel}
                buttonCss={"border-gray-300 text-black bg-white self-start"}
              />
            </div>
            <div className="max-md:hidden">
              <img
                src={summerlook.imgSmall}
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

export default SummerLook;
