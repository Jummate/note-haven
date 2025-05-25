import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";
import SidebarTab from "../shared/components/SidebarTab";
import { useTabStore } from "../features/notes/stores/tabStore";
import { sideBarTabs, SideBarTabKey } from "../features/notes/constants/tabs";
import { AppIcons } from "../shared/icons/Icons";
import Tags from "../features/tags/components/Tags";
import { useHeaderStore } from "../features/notes/stores/headerStore";

// type SidebarProps = {};

function Sidebar() {
  const { activeTabs, setActiveTab } = useTabStore();
  const { setHeaderText } = useHeaderStore();

  const navigate = useNavigate();

  const handleClick = (
    activeTab: SideBarTabKey,
    path: string,
    text: string
  ) => {
    setActiveTab("sidebar", activeTab);
    setHeaderText(text);

    navigate(path);
  };

  return (
    <div className="h-full border border-r-1 border-y-0 border-l-0 border-gray-200 px-8">
      <div className="py-12">
        <img
          src={logo}
          alt="Notes Haven logo"
        />
      </div>
      <div className="py-4 border-b-2">
        {sideBarTabs.map(({ key, text, path }) => {
          return (
            <SidebarTab
              key={key}
              text={text}
              icon={AppIcons[key]}
              isActive={activeTabs.sidebar == key}
              onClick={() => handleClick(key, path, text)}
            />
          );
        })}
      </div>
      <Tags styles="py-8" />
    </div>
  );
}

export default Sidebar;
