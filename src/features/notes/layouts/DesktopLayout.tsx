import React, { PropsWithChildren } from "react";
import Sidebar from "../containers/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function DesktopLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] flex-1">
      {children}
    </div>

    // <div className="min-h-screen cont flex flex-col">
    //   <div className="hidden lg:grid grid-cols-[250px_1fr] flex-1 text-2xl">
    //     <Sidebar />
    //     <main className="grid grid-rows-[100px_1fr]">
    //       <Header />
    //       <Outlet />
    //     </main>
    //   </div>
    // </div>
  );
}

export default DesktopLayout;
