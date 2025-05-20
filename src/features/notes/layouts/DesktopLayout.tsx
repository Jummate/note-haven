import React, { PropsWithChildren, ReactNode } from "react";
import Sidebar from "../containers/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

type DesktopLayoutProps = {
  firstItem: ReactNode;
  secondItem: ReactNode;
  thirdItem: ReactNode;
};

function DesktopLayout({
  firstItem,
  secondItem,
  thirdItem,
}: DesktopLayoutProps) {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] flex-1">
      <div className="p-10 px-7">{firstItem}</div>
      <div className="border border-r-1 border-y-0 border-l-1 relative flex p-8">
        {secondItem}
      </div>
      <div className="p-5">{thirdItem}</div>
    </div>
  );
}

export default DesktopLayout;
