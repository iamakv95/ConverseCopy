import React from "react";
import { PiMagnifyingGlass } from "react-icons/pi";
import {
  searchLeftBig,
  searchLeftSmall,
  searchRightBig,
  searchRightSmall,
} from "../assets/images";
import { Link } from "react-router-dom";

const SearchBox = () => {
  return (
    <div>
      <div className="flex w-full flex-1 items-start justify-between gap-4 max-lg:flex-col-reverse">
        <div className="grid w-1/2 flex-1 grid-cols-2 max-lg:w-full max-md:grid-cols-1">
          <div className="flex flex-1">
            <div className="relative flex items-end justify-center">
              <img src={searchLeftBig} alt="search" />
              <Link
                to="/"
                className="absolute bottom-2 text-3xl font-bold uppercase text-white"
              >
                Shop Chunk 70
              </Link>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 items-center justify-center bg-slate-200 text-center">
              <p className="text-xl font-bold">#ConverseStyle</p>
            </div>
            <img src={searchRightSmall} alt="search" />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col items-start justify-center gap-4 bg-gray-200 px-6">
              <h3 className="text-xl font-bold">CHUCK 70</h3>
              <p className="text-sm">
                The Chuck 70 is the throwback sneaker that never gets old and is
                built for those who never go out of style.
              </p>
              <Link to="/" className="font-semibold">
                View All
              </Link>
            </div>
            <img src={searchLeftSmall} alt="search" />
          </div>
          <div className="flex flex-1">
            <img src={searchRightBig} alt="search" />
          </div>
        </div>
        <div className="flex w-1/2 flex-1 flex-col gap-8 py-8 max-lg:w-full">
          <div className="flex flex-1 flex-col gap-4 border-b border-black px-10 pb-20">
            <h2 className="text-3xl font-black uppercase text-black">SEARCH</h2>
            <div className="flex items-stretch justify-between border-b border-b-gray-400">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-[90%] px-2 text-xl font-bold uppercase text-black outline-none placeholder:text-lg placeholder:text-neutral-400"
              />
              <button className="flex w-[10%] justify-end p-2 text-black">
                <PiMagnifyingGlass className="h-[20px] w-[20px] object-contain" />
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-10 px-10">
            <h2 className="text-3xl font-black uppercase">Top SEARCH</h2>
            <ul className="flex flex-col gap-4 px-4">
              <li className="text-lg font-bold">Chuck Taylor</li>
              <li className="text-lg font-bold">Chuck 70</li>
              <li className="text-lg font-bold">Platform</li>
              <li className="text-lg font-bold">Run Star Hike</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
