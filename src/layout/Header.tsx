import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../shared/components";
// import { useTabStore } from "../stores/tabStore";
// import { tabsMap } from "../constants/tabs";
import PageHeader from "../features/notes/shared/components/PageHeader";
import { useHeaderStore } from "../features/notes/stores/headerStore";
import { AppIcons } from "../shared/icons/Icons";
import { useTabStore } from "../features/notes/stores/tabStore";

function Header() {
  const [searchInput, setSearchInput] = useState<string>("");
  const {setActiveTab} = useTabStore();
  const {headerText, setHeaderText} = useHeaderStore();

  const navigate = useNavigate();

  const SettingsIcon = AppIcons["settings"];

  function handleClick(){
    setActiveTab("sidebar", "");
    setActiveTab("footer", "settings");
    setActiveTab("settings", "color-theme")
    setHeaderText("Settings")
    navigate("/settings")
  }

  return (
    <div>
      <div className="px-8 py-12 border border-b-1 border-x-0 flex items-center">
        <div className="flex justify-between items-center flex-1">
          <PageHeader headerText={headerText} />
          <div className="flex justify-center items-center gap-8 w-[35%]">
            <Input
              name="search"
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              styles="py-3 text-2xl"
            />
            <button
              type="button"
              aria-label="Setting Icon"
            >
              <SettingsIcon
                className="text-4xl text-secondary-500 cursor-pointer hover:text-primary-500/80"
                onClick={handleClick}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
