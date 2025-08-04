import { useNavigate } from 'react-router-dom';

import SidebarTab from '../shared/components/SidebarTab';
import { useTabStore } from '../features/notes/stores/tabStore';
import { sideBarTabs } from '../features/notes/constants/tabs';
import Tags from '../features/tags/components/Tags';
import { useHeaderStore } from '../features/notes/stores/headerStore';
import AppLogo from '../shared/components/AppLogo';

function Sidebar() {
  const { activeTabs, setActiveTab } = useTabStore();
  const { setHeaderText } = useHeaderStore();

  const navigate = useNavigate();

  const handleClick = (activeTab: string, path: string) => {
    setActiveTab('sidebar', activeTab);
    setHeaderText(activeTab);

    navigate(path);
  };

  return (
    <div className="h-full border border-r-1 border-y-0 border-l-0 border-gray-200 px-8">
      <div className="py-12">
        <AppLogo />
      </div>
      <div className="py-4 border-b-2">
        {sideBarTabs.map(({ icon, label, path }) => {
          return (
            <SidebarTab
              key={label}
              text={label}
              icon={icon}
              isActive={activeTabs.sidebar == label}
              onClick={() => handleClick(label, path)}
            />
          );
        })}
      </div>

      <Tags.WithErrorBoundary styles="py-8" />
    </div>
  );
}

export default Sidebar;
