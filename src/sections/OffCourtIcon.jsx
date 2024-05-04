import React from "react";
import { offcourticon } from "../constants";
import Button from "../components/Button";

const OffCourtIcon = () => {
  return (
    <div className="flex flex-col px-8 py-6 max-xl:px-0">
      <h2 className="text-2xl font-bold max-xl:px-4 max-md:text-xl">
        Off Court Icon
      </h2>
      <div className="pt-6">
        <div className="flex w-full flex-1 flex-row-reverse justify-center max-md:flex-col">
          <div className="flex w-1/2 flex-1 justify-center self-stretch max-md:w-full">
            <img src={offcourticon.imgBig} alt="hero big" className="w-full" />
          </div>
          <div className="flex w-1/2 flex-1 flex-col max-md:w-full">
            <div className="flex flex-1 flex-col justify-center gap-4 bg-neutral-800 px-4 py-20 text-white max-md:py-10">
              <h2 className="text-3xl max-lg:text-2xl">{offcourticon.title}</h2>
              <p>{offcourticon.desc}</p>
              <Button
                label={offcourticon.buttonLabel}
                buttonCss={"border-gray-300 text-black bg-white self-start"}
              />
            </div>
            <div className="max-md:hidden">
              <img
                src={offcourticon.imgSmall}
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

export default OffCourtIcon;
