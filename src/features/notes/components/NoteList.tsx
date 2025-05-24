// import React from "react";

import { useNavigate } from "react-router-dom";
import { generateSlug } from "../../../shared/utils/slugify";
import clsx from "clsx";
import { NoteItem, PopulatedNote } from "../types";

function Note({ onNoteSelect, note: { tags, title, createdAt } }: NoteItem) {
  return (
    <div
      className="flex flex-col gap-3 py-3"
      onClick={onNoteSelect}
    >
      <h1 className="font-bold text-2xl">{title}</h1>

      <div className="flex gap-3 text-lg">
        {tags?.map(({ id, name }) => (
          <span
            key={id}
            className="bg-secondary-200 px-3 rounded-md"
          >
            {name}
          </span>
        ))}
      </div>

      <p className="text-lg">{new Date(createdAt).toLocaleDateString()}</p>
    </div>
  );
}

function NoteList<T extends PopulatedNote>({
  data,
  path,
  styles,
}: {
  data: T[] | undefined;
  path: string;
  styles?: string;
}) {
  const navigate = useNavigate();

  if (!data || data.length < 1) return <p>No note to display</p>;

  return (
    <div className={clsx("divide-y divide-secondary-200", styles)}>
      {data.map((item) => {
        const slug = generateSlug(item.title);
        const actualPath = `${path}/${item.id}/${slug}`;
        return (
          <Note
            key={item.id}
            onNoteSelect={() => navigate(actualPath)}
            note={item}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
