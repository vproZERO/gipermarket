import React from "react";
import clsx from "clsx";

const Button = ({ children, variant, className, onClick, type , icon}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "p-2 lg:py-[10px] lg:px-[15px] rounded-lg flex items-center justify-center lg:gap-3",
        className,
        {
          "bg-gray hover:bg-gray2 ": variant === "primary",
        }
      )}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
