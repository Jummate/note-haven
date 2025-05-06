import { ReactNode } from "react";
import clsx from "clsx";

// interface ButtonProps {
//   type?: "submit" | "reset" | "button";
//   disabled?: boolean;
//   children: ReactNode;
//   styles?: string;
//   onClick?: () => void;
//   variant?: "primary" | "secondary" | "danger" | "outline";
// }


// const variantStyles: Record<string, string> = {
//   primary: "bg-primary-500 text-white",
//   secondary: "bg-gray-200 text-gray-800",
//   danger: "bg-red-500 text-white",
//   outline: "border border-gray-500 text-gray-800 bg-transparent",
// };

// function Button({
//   children,
//   type = "button",
//   styles = "",
//   disabled = false,
//   onClick,
//   variant = "primary",
// }: ButtonProps) {
//   return (
//     <button
//       type={type}
//       disabled={disabled}
//       className={`rounded-xl p-4 w-full bg-primary-500 text-white focus:border-secondary-950 focus:outline-none ${
//         disabled ? "cursor-not-allowed" : "cursor-pointer"
//       } ${styles}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

// export default Button;

type ButtonVariant = "primary" | "outline" | "danger" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  styles?: string;
  variant?: ButtonVariant
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 text-white",
  secondary: "bg-secondary-200 text-secondary-800",
  danger: "bg-red-500 text-white",
  outline: "border border-secondary-300 text-secondary-800 bg-transparent",
};

function Button({
  type = "button",
  disabled = false,
  children,
  onClick,
  styles = "",
  variant = "primary",
}: ButtonProps) {
  const baseStyle = "flex items-center gap-3 justify-center text-nowrap rounded-xl p-4 w-full focus:outline-none";
  const cursorStyle = disabled ? "cursor-not-allowed" : "cursor-pointer";
  const variantClass = variantStyles[variant]

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx( baseStyle, variantClass, cursorStyle, styles)}
    >
      {children}
    </button>
  );
}

export default Button;

