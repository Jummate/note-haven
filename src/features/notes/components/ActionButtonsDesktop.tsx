import clsx from "clsx";
import { Button } from "../../../shared/components";
import { Icons } from "../../../shared/icons/Icons";
import { ActionButtonsDesktopProps } from "../types";

function ActionButtonsDesktop({
  styles,
  type = "active",
}: ActionButtonsDesktopProps) {
  const ArchivedIcon = Icons["archived"];
  const DeleteIcon = Icons["delete"];
  const RestoreIcon = Icons["restore"];
  return (
    <div className={clsx("flex flex-col gap-3", styles)}>
      <Button
        variant="outline"
        styles="md:text-md"
      >
        {type == "active" ? (
          <ArchivedIcon size={20} />
        ) : (
          <RestoreIcon size={20} />
        )}
        {type == "active" ? "Archive Note" : "Restore Note"}
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
