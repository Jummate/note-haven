import { useState } from "react";

import { Input } from "../../../shared/components";

import { LuSettings } from "react-icons/lu";
// import { useTabStore } from "../stores/tabStore";
// import { tabsMap } from "../constants/tabs";
import PageHeader from "../shared/components/PageHeader";
import { useNavigate } from "react-router-dom";
import { useHeaderStore } from "../stores/headerStore";

function Header() {
  const [searchInput, setSearchInput] = useState<string>("");
  // const activeTab = useTabStore((state) => state.activeTab);
  // const { text: activeTabText } = tabsMap[activeTab];

  const { headerText } = useHeaderStore();
  const navigate = useNavigate();

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
            <LuSettings
              className="text-4xl text-secondary-500 cursor-pointer"
              onClick={() => navigate("/settings")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
