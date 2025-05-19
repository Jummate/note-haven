import React from "react";
import { Button } from "../../../shared/components";
import { Icons } from "../../../shared/icons/Icons";

function ActionButtonsPanel({
  type = "active",
}: {
  type?: "active" | "archive";
}) {
  const ArchivedIcon = Icons["archived"];
  const DeleteIcon = Icons["delete"];
  return (
    <div className="flex flex-col gap-3">
      {type == "active" ? (
        <>
          <Button
            variant="outline"
            styles="md:text-md"
          >
            <ArchivedIcon size={20} /> Archive Note
          </Button>
          <Button
            variant="outline"
            styles="md:text-md"
          >
            <DeleteIcon /> Delete Note
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="outline"
            styles="md:text-md"
          >
            <ArchivedIcon size={20} /> Restore Note
          </Button>
          <Button
            variant="outline"
            styles="md:text-md"
          >
            <DeleteIcon /> Delete Note
          </Button>
        </>
      )}
    </div>
  );
}

export default ActionButtonsPanel;
