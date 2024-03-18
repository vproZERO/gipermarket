import React from "react";
import clsx from "clsx";

const Button = ({ children, variant, className, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "p-2 md:py-[10px] md:px-[15px] flex items-center justify-center md:gap-3",
        className,
        {
          "bg-yellow1 ": variant === "primary",
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
