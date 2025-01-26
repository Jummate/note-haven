import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import hidePasswordIcon from "../../assets/icon-hide-password.svg";
import showPasswordIcon from "../../assets/icon-show-password.svg";

type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "search"
  | "tel"
  | "url";

interface InputProps {
  styles?: string;
  type?: InputType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

const defaultStyle =
  "rounded-xl p-4 w-full bg-white border border-secondary-300 hover:bg-secondary-50 cursor-pointer focus:border-secondary-950 focus:outline-none";
const eyeStyle = "absolute right-3 w-8 h-8 z-10 cursor-pointer";

function TextInput({ type, styles, onChange, placeholder, value }: InputProps) {
  return (
    <input
      type={type}
      className={`${defaultStyle} ${styles ?? ""}`}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

function PasswordInput({ styles, onChange, placeholder, value }: InputProps) {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="w-full relative flex items-center justify-center">
      <input
        type={showInput ? "text" : "password"}
        className={`${defaultStyle} pr-14 ${styles ?? ""}`}
        onChange={onChange}
        value={value}
        placeholder={placeholder || "Enter your password"}
      />
      {showInput ? (
        <img
          className={eyeStyle}
          src={hidePasswordIcon}
          onClick={() => setShowInput(!showInput)}
          aria-label="Hide password"
          title="Hide password"
        />
      ) : (
        <img
          className={eyeStyle}
          src={showPasswordIcon}
          onClick={() => setShowInput(!showInput)}
          aria-label="Show password"
          title="Show password"
        />
      )}
    </div>
  );
}

function Input({ type = "text", ...props }: InputProps) {
  return type === "password" ? (
    <PasswordInput {...props} />
  ) : (
    <TextInput
      type={type}
      {...props}
    />
  );
}

export default Input;
