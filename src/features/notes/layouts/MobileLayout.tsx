import { PropsWithChildren } from "react";
import logo from "../../../assets/logo.svg";
import { Outlet } from "react-router-dom";

function MobileLayout({ children }: PropsWithChildren) {
  console.log("using mobile");
  return (
    <div className="flex flex-col flex-1 lg:hidden bg-secondary-100 relative">
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

export default MobileLayout;
