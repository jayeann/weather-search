import React from "react";

interface ButtonProps {
  handleClick: () => void; // Type for handleClick function
  key?: string;
  text?: string;
  value?: string;
  icon?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  leftFlat?: boolean;
}
const Button = ({
  key,
  handleClick,
  text,
  value,
  icon,
  ref,
  className,
  disabled,
  leftFlat,
}: ButtonProps) => {
  return (
    <button
      className={`basic-button flex justify-content-center items-center 
        ${
          disabled
            ? `cursor-not-allowed opacity-50 `
            : `hover:outline-none hover:border-sky-500 hover:ring-1 hover:ring-sky-500`
        } 
        ${leftFlat ? "rounded-r-lg" : "rounded-lg"}
        ${className ? className : ""}
      `}
      key={key}
      onClick={handleClick}
      value={value}
      ref={ref}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {text && <span className={`${icon ? "ml-2" : ""}`}>{text}</span>}
    </button>
  );
};

export default Button;
