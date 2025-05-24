import { ReactNode } from "react";
import logo from "../../assets/logo.svg";
import clsx from "clsx";

type MobilelayoutProps = {
  children: ReactNode;
  showHeader?: boolean;
  styles?: string;
};

function MobileLayout({
  children,
  styles,
  showHeader = true,
}: MobilelayoutProps) {
  return (
    <div
      className={clsx("flex flex-col flex-1 bg-secondary-100 relative", styles)}
    >
      {showHeader && (
        <div className="p-8">
          <div className="">
            <img
              src={logo}
              alt=""
            />
          </div>
        </div>
      )}

      <div className="flex flex-1 justify-center">
        <div className="p-8 text-secondary-900 font-inter w-full bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MobileLayout;
