import React from "react";
import { Outlet } from "react-router-dom";
// import MobileLayout from '../layouts/MobileLayout';
// import NoteLayout from '../layouts/NoteLayout';
// import DesktopLayout from '../layouts/DesktopLayout';
import logo from "../../../assets/logo.svg";

function Settings() {
  return (
    <>
      <div className="hidden lg:grid grid-cols-[1fr_2fr] flex-1">
        <div className="p-10 px-7 border border-r-1 border-y-0 border-l-0">
          <div className="mb-12">Show tabs here</div>
        </div>
        <div>Show content here</div>
      </div>

      <div className="flex flex-col flex-1 lg:hidden bg-secondary-100">
        <div className="p-8">
          <div className="">
            <img
              src={logo}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="p-8 text-secondary-900 font-inter w-full bg-white">
            <h1 className="font-bold text-4xl font-inter mb-4">Settings</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
