import { PropsWithChildren } from "react";
import clsx from "clsx";

function TwoColumnLayout({
  children,
  styles,
}: PropsWithChildren<{ styles?: string }>) {
  return (
    <div className={clsx("grid grid-cols-[1fr_2fr] flex-1", styles)}>
      {children}
    </div>
  );
}

export default TwoColumnLayout;
