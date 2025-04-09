import React from "react";

interface ButtonProps {
  handleClick: () => void; // Type for handleClick function
  key?: string;
  text?: string;
  value?: string;
  icon?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
  className?: string;
}
const Button = ({
  key,
  handleClick,
  text,
  value,
  icon,
  ref,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-content-center items-center hover:outline-none hover:border-sky-500 hover:ring-1 hover:ring-sky-500 ${className}`}
      key={key}
      onClick={handleClick}
      value={value}
      ref={ref}
    >
      {icon && <span>{icon}</span>}
      {text && <span className={`${icon ? "ml-2" : ""}`}>{text}</span>}
    </button>
  );
};

export default Button;
