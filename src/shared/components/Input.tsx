import React, { useRef, useState } from "react";
import hidePasswordIcon from "../../assets/icon-hide-password.svg";
import showPasswordIcon from "../../assets/icon-show-password.svg";
import { CiSearch } from "react-icons/ci";

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
  name: string;
  type?: InputType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  id?: string;
}

const defaultStyle =
  "rounded-xl p-4 w-full bg-white border border-secondary-300 hover:bg-secondary-50 cursor-pointer focus:border-secondary-950 focus:outline-none";
const eyeStyle = "absolute right-3 w-8 h-8 z-10 cursor-pointer";
const searchStyle = "absolute left-3 w-8 h-8 z-10 cursor-pointer";

function TextInput({
  type,
  styles,
  name,
  onChange,
  placeholder,
  value,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className={`${defaultStyle} ${styles ?? ""}`}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

function PasswordInput({
  styles,
  name,
  onChange,
  placeholder,
  value,
}: InputProps) {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="w-full relative flex items-center justify-center">
      <input
        type={showInput ? "text" : "password"}
        name={name}
        id={name}
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

function SearchInput({
  styles,
  name,
  onChange,
  placeholder,
  value,
}: InputProps) {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="w-full relative flex items-center justify-center">
      <input
        type="search"
        name={name}
        id={name}
        className={`${defaultStyle} pl-14 ${styles ?? ""}`}
        onChange={onChange}
        value={value}
        placeholder={placeholder || "Search by title, content, or tags..."}
        ref={inputRef}
      />

      <CiSearch
        className={searchStyle}
        aria-label="Search with keywords"
        title="Search with keywords"
        onClick={() => inputRef?.current?.focus()}
      />
    </div>
  );
}

function Input({ type = "text", ...props }: InputProps) {
  let input = null;

  switch (type) {
    case "password":
      input = <PasswordInput {...props} />;
      break;
    case "search":
      input = <SearchInput {...props} />;
      break;
    default:
      input = (
        <TextInput
          type={type}
          {...props}
        />
      );
      break;
  }

  return input;
  // return type === "password" ? (
  //   <PasswordInput {...props} />
  // ) : (
  //   <TextInput
  //     type={type}
  //     {...props}
  //   />
  // );
}

export default Input;
