import React from "react";
import { Outlet } from "react-router-dom";
// import MobileLayout from '../layouts/MobileLayout';
// import NoteLayout from '../layouts/NoteLayout';
// import DesktopLayout from '../layouts/DesktopLayout';
import logo from "../../../assets/logo.svg";

import ColorTheme from "../containers/ColorTheme";
import FontTheme from "../containers/FontTheme";
import ChangePassword from "../containers/ChangePassword";
import { settingsTabs, SettingsTabKey } from "../constants/tabs";
// import SidebarTab from "../components/SidebarTab";

import { useNavigate } from "react-router-dom";
import { Icons } from "../../../shared/icons/Icons";
import { useTabStore } from "../stores/tabStore";
import SettingsTab from "../components/SettingsTab";

function Settings() {
  const { activeTabs, setActiveTab } = useTabStore();
  const navigate = useNavigate();

  const handleClick = (activeTab: SettingsTabKey, path: string) => {
    setActiveTab("settings", activeTab);
    navigate(path);
  };
  return (
    <>
      <div className="hidden lg:grid grid-cols-[1fr_2fr] flex-1">
        <div className="p-10 px-7 border border-r-1 border-y-0 border-l-0">
          <div className="mb-12">
            {settingsTabs.map(({ key, text, path }) => {
              return (
                <SettingsTab
                  key={key}
                  text={text}
                  icon={Icons[key]}
                  isActive={activeTabs.settings == key}
                  onClick={() => handleClick(key, path)}
                />
              );
            })}
          </div>
        </div>
        {/* <div>Show content here</div> */}
        <Outlet />
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

Settings.ChangePassword = ChangePassword;
Settings.ColorTheme = ColorTheme;
Settings.FontTheme = FontTheme;

export default Settings;
