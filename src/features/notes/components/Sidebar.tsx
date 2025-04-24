import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import homeIcon from "../../../assets/icon-home.svg";
import SidebarTab from "./SidebarTab";

type SidebarProps = {};

function Sidebar() {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  return (
    <aside className="h-screen border-r-2 border-gray-200 px-8">
      <div className="py-12">
        <img
          src={logo}
          alt=""
        />
      </div>
      <div className="py-4">
        <SidebarTab
          text="All Notes"
          icon={homeIcon}
        />
      </div>
    </aside>
  );
}

export default Sidebar;
