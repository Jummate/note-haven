// import React from "react";
import { Icons } from "../../../shared/icons/Icons";
// import { useLocation } from "react-router-dom";

type NotePreviewprops = {
  showNote?: boolean;
};

function NotePreview({ showNote = true }: NotePreviewprops) {
  const TagIcon = Icons["tags"];
  const ClockIcon = Icons["clock"];

  if (!showNote)
    return (
      <div className="flex flex-col flex-1 justify-center items-center font-bold text-4xl">
        <p>Select a note to preview</p>
      </div>
    );
  return (
    <article className="flex flex-col flex-1">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl">React Performance Optimisation</h1>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-[150px_1fr]">
            <span>
              <TagIcon className="inline" /> Tags
            </span>
            <span>Dev, React</span>
          </div>
          <div className="grid grid-cols-[150px_1fr]">
            <span>
              <ClockIcon className="inline" /> Last Edited
            </span>
            <span>29 Oct 2024</span>
          </div>
          <hr className="w-full bg-secondary-200 h-1 my-4" />
        </div>

        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </article>
  );
}

export default NotePreview;
