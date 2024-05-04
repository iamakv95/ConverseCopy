import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, src, buttonCss }) => {
  return (
    <Link
      to={src}
      className={`${buttonCss} font-sm text-cenetr flex border-2 px-4  py-2 font-semibold uppercase`}
    >
      {label}
    </Link>
  );
};

export default Button;
