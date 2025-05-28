import { IconType } from "react-icons";
import { AppIcons } from "../../../shared/icons/Icons";
import clsx from "clsx";

type PanelItemProps = {
  icon: IconType;
  itemLabel: string;
  itemTagLine: string;
  onSelect: () => void;
  isActive: boolean;
};

function PanelItem({
  icon: ItemIcon,
  itemLabel,
  itemTagLine,
  isActive,
  onSelect,
}: PanelItemProps) {
  const SelectionDefault = AppIcons.selectionIndicatorDefault
  const SelectionActive = AppIcons.selectionIndicatorActive
  return (
    <div
      className={clsx(
        "flex border border-secondary-200 rounded-xl justify-between items-center p-4 hover:bg-secondary-100",
        { "bg-secondary-100": isActive }
      )}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect()}
      aria-selected={isActive}
    >
      <div className="flex gap-10 items-center">
        {ItemIcon && (
          <ItemIcon
            size={30}
            className="border border-secondary-200 p-2 rounded-lg bg-white"
          />
        )}
        <div className="flex flex-col gap-2">
          {itemLabel && <p className="text-3xl">{itemLabel}</p>}
          {itemTagLine && <p className="text-lg">{itemTagLine}</p>}
        </div>
      </div>

      {isActive ? (
        <SelectionActive
          size={22}
          className="text-primary-500"
        />
      ) : (
        <SelectionDefault
          size={20}
          className="p-1"
        />
      )}

      {/* {Indicator && (
        <Indicator
          size={23}
          className="self-end"
        />
      )} */}
    </div>
  );
}

export default PanelItem;
