import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import homeIcon from "../../../assets/icon-home.svg";
import SidebarTab from "./SidebarTab";

import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineArchive } from "react-icons/md";
import { useTabStore } from "../stores/tabStore";

type SidebarProps = {};

function Sidebar() {
  const activeTab = useTabStore((state) => state.activeTab);
  const setActiveTab = useTabStore((state) => state.setActiveTab);
  const navigate = useNavigate();

  return (
    <aside className="h-screen border-r-2 border-gray-200 px-8">
      <div className="py-12">
        <img
          src={logo}
          alt=""
        />
      </div>
      <div className="py-4 border-b-2">
        <SidebarTab
          text="All Notes"
          icon={IoHomeOutline}
          isActive={activeTab == "allNotes"}
          onClick={() => {
            setActiveTab("allNotes");
            navigate("/notes/allnotes");
          }}
        />
        <SidebarTab
          text="Archived Notes"
          icon={MdOutlineArchive}
          isActive={activeTab == "archivedNotes"}
          onClick={() => {
            setActiveTab("archivedNotes");
            navigate("/notes/archivednotes");
          }}
        />
      </div>
    </aside>
  );
}

export default Sidebar;
