import React from "react";

const NovbarTop = () => {
  return (
    <div className="flex w-full flex-1 items-center justify-center bg-gray-200 px-8 py-2 max-xl:px-2">
      <p className=" text-sm font-semibold text-black">
        FREE SHIPPING | Free shipping for all orders |
        <a href="/" className="ml-1 text-xs capitalize text-gray-600">
          See details
        </a>
      </p>
    </div>
  );
};

export default NovbarTop;
