import { useNavigate } from 'react-router-dom';
import { IconType } from 'react-icons';
import clsx from 'clsx';

import { footerTabs } from './constants/tabs';
import { useTabStore } from '../features/notes/stores/tabStore';
import { useHeaderStore } from '../features/notes/stores/headerStore';

type FooterTabProps = {
  text: string;
  path: string;
  icon: IconType;
  isActive: boolean;
  onClick: () => void;
};

function FooterTab({ text, icon: Icon, isActive, onClick }: FooterTabProps) {
  let modifiedText = '';

  if (text == 'All Notes') {
    modifiedText = 'Home';
  } else if (text == 'Archived Notes') {
    modifiedText = 'Archived';
  } else {
    modifiedText = text;
  }

  return (
    <button
      type="button"
      className={clsx(
        'flex flex-col gap-1 items-center p-2 px-6 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary hover:text-primary-dark',
        { 'bg-primary-light dark:bg-neutral-700': isActive },
      )}
      onClick={onClick}
      aria-selected={isActive}
      aria-label={modifiedText}
      title={modifiedText}
    >
      <Icon size={20} className={clsx({ 'text-primary': isActive })} />
      <span
        className={clsx('hidden sm:block text-lg', {
          'text-primary': isActive,
        })}
      >
        {modifiedText}
      </span>
    </button>
  );
}

function Footer() {
  const { activeTabs, setActiveTab } = useTabStore();
  const { setHeaderText } = useHeaderStore();
  const navigate = useNavigate();

  const handleClick = (activeTab: string, path: string) => {
    setActiveTab('footer', activeTab);
    setHeaderText(activeTab);
    navigate(path);
  };
  return (
    <div className="fixed left-0 bottom-0 w-full flex justify-evenly py-4 shadow-all-edges">
      {footerTabs.map(({ icon, label, path }) => {
        return (
          <FooterTab
            key={label}
            text={label}
            path={path}
            icon={icon}
            isActive={activeTabs.footer == label}
            onClick={() => handleClick(label, path)}
          />
        );
      })}
    </div>
  );
}

export default Footer;
