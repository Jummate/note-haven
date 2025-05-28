import { IconType } from "react-icons";
import clsx from "clsx";

import { AppIcons } from "../icons/Icons";

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
  const ChevRonRight = AppIcons.chevronRight;
  return (
    <div
      className={clsx(
        "flex justify-between rounded-xl p-3 py-4 items-center cursor-pointer",
        { "bg-primary-50": isActive }
      )}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-selected={isActive}
    >
      <div
        className={clsx("flex gap-3 items-center text-secondary-800 whitespace-nowrap hover:text-primary-500/80", {
          "font-semibold": isActive,
        })}
      >
        <Icon
          className={clsx({ "text-primary-500": isActive })}
          size={20}
        />
        {text}
      </div>
      {isActive && (
        <div>
          <ChevRonRight size={20} />
        </div>
      )}
    </div>
  );
}

export default SidebarTab;
