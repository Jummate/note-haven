import { ReactNode } from "react";

type VerticalWrapperProps = {
  children: ReactNode;
  styles?: string;
};

function VerticalWrapper({ children, styles }: VerticalWrapperProps) {
  return (
    <div className={`flex flex-col gap-5 ${styles ?? ""}`}>{children}</div>
  );
}

export default VerticalWrapper;
