import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import SidebarTab from "./SidebarTab";

import { useTabStore } from "../stores/tabStore";
import { TabKey, tabs, SideBarTabs } from "../constants/tabs";
import { Icons } from "../../../shared/icons/Icons";

type SidebarProps = {};

function Sidebar() {
  const activeTab = useTabStore((state) => state.activeTab);
  const setActiveTab = useTabStore((state) => state.setActiveTab);
  const navigate = useNavigate();

  const handleClick = (activeTab: TabKey, path: string) => {
    setActiveTab(activeTab);
    navigate(path);
  };

  return (
    <aside className="h-screen border-r-2 border-gray-200 px-8">
      <div className="py-12">
        <img
          src={logo}
          alt=""
        />
      </div>
      <div className="py-4 border-b-2">
        {tabs.map(({ key, text, path }) => {
          return (
            SideBarTabs.includes(key) && (
              <SidebarTab
                key={key}
                text={text}
                icon={Icons[key]}
                isActive={activeTab == key}
                onClick={() => handleClick(key, path)}
              />
            )
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
