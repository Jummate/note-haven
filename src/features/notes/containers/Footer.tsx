// import React from "react";

import { FooterTabs, tabs, TabKey } from "../constants/tabs";
import { Icons } from "../../../shared/icons/Icons";
import { IconType } from "react-icons";

import { useTabStore } from "../stores/tabStore";
import { useNavigate } from "react-router-dom";

type FooterTabProps = {
  text: string;
  path: string;
  icon: IconType;
  isActive: boolean;
  onClick: () => void;
};

function FooterTab({ text, icon: Icon, isActive, onClick }: FooterTabProps) {
  let modifiedText = "";

  if (text == "All Notes") {
    modifiedText = "Home";
  } else if (text == "Archived Notes") {
    modifiedText = "Archived";
  } else {
    modifiedText = text;
  }

  return (
    <div
      className={`flex flex-col gap-1 items-center ${
        isActive ? "bg-primary-50" : ""
      } p-2 px-6 rounded-xl cursor-default`}
      onClick={onClick}
    >
      <Icon
        size={20}
        className={`${isActive ? "text-primary-500" : ""}`}
      />
      <h1
        className={`hidden sm:block text-lg ${
          isActive ? "text-primary-500" : ""
        }`}
      >
        {modifiedText}
      </h1>
    </div>
  );
}

function Footer() {
  const activeTab = useTabStore((state) => state.activeTab);
  const setActiveTab = useTabStore((state) => state.setActiveTab);
  const navigate = useNavigate();

  const handleClick = (activeTab: TabKey, path: string) => {
    setActiveTab(activeTab);
    navigate(path);
  };
  return (
    <div className="absolute left-0 bottom-0 w-full flex justify-evenly py-4 shadow-all-edges">
      {tabs.map(({ key, text, path }) => {
        return (
          FooterTabs.includes(key) && (
            <FooterTab
              key={key}
              text={text}
              path={path}
              icon={Icons[key]}
              isActive={activeTab == key}
              onClick={() => handleClick(key, path)}
            />
          )
        );
      })}
    </div>
  );
}

export default Footer;
