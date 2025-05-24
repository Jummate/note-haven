import clsx from "clsx";
import { AppIcons } from "../../../shared/icons/Icons";
import { ActionButtonsMobileProps } from "../types";

function ActionButtonsMobile({
  styles,
  type,
  showActionButtons,
}: ActionButtonsMobileProps) {
  const ArchivedIcon = AppIcons["archived"];
  const DeleteIcon = AppIcons["delete"];
  const RestoreIcon = AppIcons["restore"];
  const ChevronLeftIcon = AppIcons["chevronLeft"];
  return (
    <div className={clsx("flex gap-3", styles)}>
      <div className="flex flex-1 justify-between">
        <div className="flex gap-2 items-center text-2xl cursor-pointer">
          <ChevronLeftIcon className="text-secondary-500 text-4xl" />
          Go Back
        </div>
        {showActionButtons && (
          <div className="flex gap-5 items-center text-2xl">
            <DeleteIcon className="cursor-pointer" />
            {type == "active" ? (
              <>
                <ArchivedIcon className="cursor-pointer" />
              </>
            ) : (
              <>
                <RestoreIcon className="cursor-pointer" />
              </>
            )}
            <span className="text-secondary-500 cursor-pointer">Cancel</span>
            <span className="text-primary-500 cursor-pointer">Save Note</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActionButtonsMobile;
