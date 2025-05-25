import clsx from "clsx";

import { Button } from "../../../shared/components";
import { AppIcons } from "../../../shared/icons/Icons";
import { ActionButtonsDesktopProps } from "../types";

function ActionButtonsDesktop({
  styles,
  type = "active",
  showActionButtons,
}: ActionButtonsDesktopProps) {
  const ArchivedIcon = AppIcons["archived"];
  const DeleteIcon = AppIcons["delete"];
  const RestoreIcon = AppIcons["restore"];
  if (!showActionButtons) return null;
  return (
    <div className={clsx("flex flex-col gap-3", styles)}>
      <Button
        type="button"
        variant="outline"
        styles="md:text-md"
      >
        {type == "active" ? <ArchivedIcon size={20} /> : null}
        {type == "archived" ? <RestoreIcon size={20} /> : null}
        {type === "active" ? "Archive Note" : ""}
        {type === "archived" ? "Restore Note" : ""}
      </Button>
      <Button
        variant="outline"
        styles="md:text-md"
      >
        <DeleteIcon /> Delete Note
      </Button>
    </div>
  );
}

export default ActionButtonsDesktop;
