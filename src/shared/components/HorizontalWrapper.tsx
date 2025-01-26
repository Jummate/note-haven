import React, { ReactNode } from "react";

type HorizontalWrapperProps = {
  styles?: string;
  children: ReactNode;
};

function HorizontalWrapper({ children, styles }: HorizontalWrapperProps) {
  return <div className={`flex ${styles ?? ""}`}>{children}</div>;
}

export default HorizontalWrapper;
