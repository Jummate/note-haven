import { ReactNode } from "react";

interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
  styles?: string;
}

function Button({ children, type = "button", styles = "" }: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-sm bg-primary-500 text-white ${styles}`}
    >
      {children}
    </button>
  );
}

export default Button;
