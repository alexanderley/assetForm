import React from "react";
import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  className,
  onClick,
}) => {
  return (
    <button
      className={`button ${className || ""}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
