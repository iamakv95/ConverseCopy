import React, { useEffect, useState } from "react";
import { topNavDets } from "../constants";
import { Link } from "react-router-dom";

const NovbarTop = () => {
  const [showDets, setShowDets] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowDets((previous) => {
        if (previous === topNavDets.length - 1) {
          return 0;
        } else {
          return previous + 1;
        }
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex w-full flex-1 items-center justify-center bg-gray-200 px-8 py-2">
      <p className="text-xs font-semibold text-black transition delay-150 duration-700 ease-in-out max-xl:px-2">
        {topNavDets[showDets].title}
        <Link
          to={topNavDets[showDets].href}
          className="ml-1 text-xs capitalize text-gray-600"
        >
          {topNavDets[showDets].linkText}
        </Link>
      </p>
    </div>
  );
};

export default NovbarTop;
