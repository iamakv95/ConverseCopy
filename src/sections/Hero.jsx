import React from "react";
import { hero } from "../constants";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="px-8 py-1 max-xl:px-0">
      <div className="flex w-full flex-1 justify-center max-md:flex-col">
        <div className="flex w-1/2 flex-1 justify-center self-stretch max-md:w-full">
          <img src={hero.imgBig} alt="hero big" className="w-full" />
        </div>
        <div className="flex w-1/2 flex-1 flex-col max-md:w-full">
          <div className="flex flex-1 flex-col justify-center gap-4 bg-black px-4 py-20 text-white max-md:py-10">
            <h2 className="text-3xl max-lg:text-2xl">{hero.title}</h2>
            <p>{hero.desc}</p>
            <Button
              label={hero.buttonLabel}
              buttonCss={"border-gray-300 text-black bg-white self-start"}
            />
          </div>
          <div className="max-md:hidden">
            <img src={hero.imgSmall} alt="hero small" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
