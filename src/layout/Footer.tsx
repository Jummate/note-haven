// import React from "react";
import { useNavigate } from 'react-router-dom';
import { IconType } from 'react-icons';
import clsx from 'clsx';

// import { footerTabs, FooterTabKey } from "./constants/tabs";
import { footerTabs } from './constants/tabs';
// import { AppIcons } from "../shared/icons/Icons";
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
        'flex flex-col gap-1 items-center p-2 px-6 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 hover:text-primary-500/80',
        { 'bg-primary-50': isActive },
      )}
      onClick={onClick}
      aria-selected={isActive}
      aria-label={modifiedText}
      title={modifiedText}
    >
      <Icon size={20} className={clsx({ 'text-primary-500': isActive })} />
      <span
        className={clsx('hidden sm:block text-lg', {
          'text-primary-500': isActive,
        })}
      >
        {modifiedText}
      </span>
    </button>
  );
}

function Footer() {
  // const {activeTab} = useTabStore((state) => state.activeTab);
  // const setActiveTab = useTabStore((state) => state.setActiveTab);
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
