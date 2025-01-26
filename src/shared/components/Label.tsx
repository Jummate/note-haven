import { ReactNode } from "react";

interface LabelProps {
  styles?: string;
  children: ReactNode;
  htmlFor?: string;
  isRequired?: boolean;
}
function Label({ children, styles, htmlFor, isRequired }: LabelProps) {
  return isRequired ? (
    <label
      htmlFor={htmlFor}
      className={`text-secondary-950 font-bold ${styles ?? ""}`}
    >
      {children} {<sup className="text-red-500">*</sup>}
    </label>
  ) : (
    <label
      htmlFor={htmlFor}
      className={`text-secondary-950 font-bold ${styles}`}
    >
      {children}
    </label>
  );
}

export default Label;
