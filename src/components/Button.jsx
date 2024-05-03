import React from "react";

const Button = ({ label, handleClick, buttonCss }) => {
  return (
    <button
      onClick={handleClick}
      className={`${buttonCss} font-sm flex border-2 px-4 py-2  font-semibold uppercase`}
    >
      {label}
    </button>
  );
};

export default Button;
