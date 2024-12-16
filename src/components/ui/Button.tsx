import React from "react";
import "./Button.scss";

// TODO: add addition types later!!
interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="button">{children}</button>;
};

export default Button;
