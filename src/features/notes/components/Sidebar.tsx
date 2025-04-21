import React from "react";
import logo from "../../../assets/logo.svg";

type SidebarProps = {};

function Sidebar() {
  return (
    <div className="h-screen border-r-2 border-gray-200 px-8">
      <div className="py-12">
        <img
          src={logo}
          alt=""
        />
      </div>
      <div>Another</div>
    </div>
  );
}

export default Sidebar;
