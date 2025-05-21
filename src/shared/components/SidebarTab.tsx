// import React, { ReactNode, SVGProps } from "react";

import { IconType } from "react-icons";
// import { IoHomeOutline } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";

type SidebarTabProps = {
  icon: IconType;
  text: string;
  isActive?: boolean;
  onClick: () => void;
};

function SidebarTab({
  icon: Icon,
  isActive = false,
  text,
  onClick,
}: SidebarTabProps) {
  return (
    <div
      className={`flex justify-between ${
        isActive ? " bg-primary-50" : ""
      } rounded-xl p-5 py-4 items-center cursor-default`}
      onClick={onClick}
    >
      <div
        className={`flex gap-3 items-center ${
          isActive ? " font-semibold" : ""
        } text-secondary-800`}
      >
        <Icon
          className={`${isActive ? "text-primary-500" : ""}`}
          size={20}
        />
        {text}
      </div>
      {isActive && (
        <div>
          <BiChevronRight size={20} />
        </div>
      )}
    </div>
  );
}

export default SidebarTab;
