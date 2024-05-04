import React from "react";
import { shopStyle } from "../constants";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ShopByStyle = () => {
  return (
    <div className="flex flex-col px-8 py-10 max-xl:px-4">
      <h2 className="text-2xl font-bold max-md:text-xl">Shop By Style</h2>
      <div className="grid grid-cols-4 gap-y-8 max-md:grid-cols-2">
        {shopStyle.map((item) => (
          <div
            key={item.label}
            className="flex  flex-1 flex-col items-center justify-center"
          >
            <img
              src={item.src}
              alt={item.label}
              className="h-[150px] w-[200px] object-cover"
            />
            <Link
              to="/"
              className="text-xl font-semibold capitalize max-lg:text-lg"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByStyle;
