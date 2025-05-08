import React, { PropsWithChildren } from "react";

function DesktopLayout({ children }: PropsWithChildren) {
  return (
    <div className="hidden lg:grid grid-cols-[1fr_2fr_1fr] flex-1">
      {children}
    </div>
  );
}

export default DesktopLayout;
