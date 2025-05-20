import { ReactNode } from "react";
import logo from "../../../assets/logo.svg";
import { Outlet } from "react-router-dom";
import clsx from "clsx";

type MobilelayoutProps = {
  children: ReactNode;
  showHeader?: boolean;
  styles?:string;
};

function MobileLayout({ children, styles, showHeader = true }: MobilelayoutProps) {
  return (
    <div className={clsx("flex flex-col flex-1 bg-secondary-100 relative", styles)}>
      {showHeader && (
        <div className="p-8">
          <div className="">
            <img src={logo} alt="" />
          </div>
        </div>
      )}

      {children}
    </div>
  );
}

export default MobileLayout;
