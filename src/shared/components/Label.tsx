import React, { ReactNode } from "react";

interface LabelProps {
  styles?: string;
  children: ReactNode;
}
function Label({ children, styles }: LabelProps) {
  return (
    <label className={`text-secondary-950 font-bold ${styles}`}>
      {children}
    </label>
  );
}

export default Label;
