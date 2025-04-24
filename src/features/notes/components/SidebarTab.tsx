import React, { ReactNode } from "react";

// import chevronRight from "../../../assets/icon-chevron-right.svg";

import ChevronRight from "../../../assets/icon-chevron-right.svg?react";
import HomeIcon from "../../../assets/icon-home.svg?react";

type SidebarTabProps = {
  icon: ReactNode;
  text: string;
};

function SidebarTab({ icon, text }: SidebarTabProps) {
  return (
    <div className="flex justify-between bg-primary-50 p-5 rounded-xl">
      <div className="flex gap-3">
        <HomeIcon className="text-primary-500" />
        {/* <img
          src={icon}
          alt=""
          className="border text-green-400"
        />{" "} */}

        {text}
      </div>
      <div>
        <ChevronRight />
        {/* <img
          src={ChevronRight}
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default SidebarTab;
