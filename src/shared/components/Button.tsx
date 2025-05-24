import { forwardRef, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "outline" | "danger" | "secondary";
// type ButtonType = "submit" | "reset" | "button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  styles?: string;
  variant?: ButtonVariant;
  ref?: React.MutableRefObject<null>;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 text-white",
  secondary: "bg-secondary-200 text-secondary-800",
  danger: "bg-red-500 text-white",
  outline: "border border-secondary-300 text-secondary-800 bg-transparent",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      disabled = false,
      children,
      styles,
      variant = "primary",
      ...props
    },
    ref
  ) => {
    const baseStyle =
      "flex items-center gap-3 justify-center whitespace-nowrap rounded-xl p-4 w-full";
    const cursorStyle = disabled ? "cursor-not-allowed" : "cursor-pointer";
    const variantClass = variantStyles[variant];

    return (
      <button
        type={type}
        disabled={disabled}
        className={clsx(baseStyle, variantClass, cursorStyle, styles)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

// function Button({
//   type = "button",
//   disabled = false,
//   children,
//   styles,
//   variant = "primary",
//   ref,
//   ...props
// }: ButtonProps) {
//   const baseStyle =
//     "flex items-center gap-3 justify-center whitespace-nowrap rounded-xl p-4 w-full";
//   const cursorStyle = disabled ? "cursor-not-allowed" : "cursor-pointer";
//   const variantClass = variantStyles[variant];

//   return (
//     <button
//       type={type}
//       disabled={disabled}
//       // onClick={onClick}
//       className={clsx(baseStyle, variantClass, cursorStyle, styles)}
//       ref={ref}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }

export default Button;
