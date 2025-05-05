import React, { PropsWithChildren } from "react";
import logo from "../../../../assets/logo.svg";

function MobileContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col flex-1 lg:hidden bg-secondary-100">
      <div className="p-8">
        <div className="">
          <img
            src={logo}
            alt=""
          />
        </div>
      </div>
      {children}
    </div>
  );
}

export default MobileContainer;
