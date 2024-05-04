import React from "react";
import { foreverclassic } from "../constants";
import Button from "../components/Button";

const ForeverClassic = () => {
  return (
    <div className="flex flex-col px-8 py-6 max-xl:px-0">
      <h2 className="text-2xl font-bold max-xl:px-4 max-md:text-xl">
        Forever Classic
      </h2>
      <div className="pt-6">
        <div className="flex w-full flex-1 flex-row-reverse justify-center max-md:flex-col">
          <div className="flex w-2/5 flex-1 justify-center self-stretch max-md:w-full">
            <img
              src={foreverclassic.imgBig}
              alt="hero big"
              className="w-full"
            />
          </div>
          <div className="flex w-3/5 flex-1 flex-col max-md:w-full">
            <div className="flex flex-1 flex-col justify-center gap-4 bg-blue-900 px-8 py-20 text-white max-md:px-4 max-md:py-10">
              <h2 className="text-3xl max-lg:text-2xl">
                {foreverclassic.title}
              </h2>
              <p>{foreverclassic.desc}</p>
              <Button
                label={foreverclassic.buttonLabel}
                buttonCss={"border-gray-300 text-black bg-white self-start"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeverClassic;
