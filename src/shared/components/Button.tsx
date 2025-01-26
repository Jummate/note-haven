import { ReactNode } from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  children: ReactNode;
  styles?: string;
  onClick: () => void;
}

function Button({
  children,
  type = "button",
  styles = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-xl p-4 w-full bg-primary-500 text-white focus:border-secondary-950 focus:outline-none ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
