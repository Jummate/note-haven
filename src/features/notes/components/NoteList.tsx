// import React from "react";

import { useNavigate } from "react-router-dom";
import { generateSlug } from "../../../shared/utils/slugify";
import clsx from "clsx";

function Note({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="flex flex-col gap-3 py-3"
      onClick={onClick}
    >
      <h1 className="font-bold text-2xl">React Performance Optimisation</h1>

      <div className="flex gap-3 text-lg">
        {["Dev", "React"].map((tag) => (
          <span
            key={tag}
            className="bg-secondary-200 px-3 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-lg">29 Oct 2024</p>
    </div>
  );
}

function NoteList({
  notes,
  path,
  styles,
}: {
  notes: string[];
  path: string;
  styles?: string;
}) {
  const navigate = useNavigate();

  return (
    <div className={clsx("divide-y divide-secondary-200", styles)}>
      {notes.map((_, index) => {
        const slug = generateSlug(
          "Would you like me to help organize your file"
        );
        const actualPath = `${path}/345678/${slug}`;
        return (
          <Note
            key={index}
            onClick={() => navigate(actualPath)}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
