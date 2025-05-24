// import React from "react";
import { AppIcons } from "../../../shared/icons/Icons";
import { NotePreviewProps } from "../types";
// import { useLocation } from "react-router-dom";

// type NotePreviewprops =

function NotePreview({ note, showNote = true }: NotePreviewProps) {
  const TagIcon = AppIcons["tags"];
  const ClockIcon = AppIcons["clock"];

  if (!showNote || !note)
    return (
      <div className="flex flex-col flex-1 justify-center items-center font-bold text-4xl">
        <p>Select a note to preview</p>
      </div>
    );

  return (
    <article className="flex flex-col flex-1">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl">{note.title}</h1>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-[150px_1fr]">
            <span>
              <TagIcon className="inline" /> Tags
            </span>
            <span>{note.tags.map((item) => item.name).toString()}</span>
          </div>
          <div className="grid grid-cols-[150px_1fr]">
            <span>
              <ClockIcon className="inline" /> Last Edited
            </span>
            <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
          </div>
          <hr className="w-full bg-secondary-200 h-1 my-4" />
        </div>

        <div>{note.content}</div>
      </div>
    </article>
  );
}

export default NotePreview;
