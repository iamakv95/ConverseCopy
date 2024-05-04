import React from "react";
import { faetures } from "../constants";
import { Link } from "react-router-dom";

const Highlights = () => {
  return (
    <div className="flex border-y border-gray-300 ">
      <div className="flex w-full flex-wrap items-start justify-between px-2 ">
        {faetures.map((item) => (
          <div
            key={item.title}
            className="flex w-1/3 flex-col items-center justify-center gap-1 border-r py-6 last:border-r-0 max-md:w-1/2 max-md:last:w-full max-md:last:border-t"
          >
            <div className="flex items-center justify-center gap-2 pb-2">
              {item.icons.map((img) => (
                <span key={img.alt}>
                  <img.iconURL className="h-[30px] w-[30px] object-contain max-md:h-[20px] max-md:w-[20px]" />
                </span>
              ))}
            </div>
            <h5 className="text-center text-lg text-black">{item.title}</h5>
            <p className="max-w-[40%] text-center text-xs text-neutral-700 max-md:max-w-[60%]">
              {item.desc}
            </p>
            <Link
              to={item.linkhref}
              className="text-xs font-semibold underline hover:text-gray-800"
            >
              {item.linkLabel}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
