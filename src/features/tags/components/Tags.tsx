// import React from 'react';
import { AppIcons } from "../../../shared/icons/Icons";
import clsx from "clsx";

import { useNavigate } from "react-router-dom";

import { useHeaderStore } from "../../notes/stores/headerStore";
import { TagsProps } from "../types";
import { useNoteStore } from "../../notes/stores/noteStore";

function Tags({ styles, divider, titleStyles, listItemStyles }: TagsProps) {
  const navigate = useNavigate();
  const { setHeaderText } = useHeaderStore();
  const TagIcon = AppIcons["tags"];

  const tags = useNoteStore((state) => state.tagMap);

  if (!tags || tags.size == 0) return null;
  const dividerStyles =
    divider == "vertical"
      ? "divide-y divide-secondary-200"
      : divider == "horizontal"
      ? "divide-x divide-secondary-200"
      : "";
  return (
    <section className={clsx("flex flex-col", styles)}>
      <h2 className={clsx("mb-5", titleStyles)}>Tags</h2>

      <ul className={clsx("flex flex-col", dividerStyles)}>
        {Array.from(tags).map(([key, value]) => (
          <li
            key={key}
            className={clsx("py-4 cursor-pointer", listItemStyles)}
            onClick={() => {
              setHeaderText(`Showing result for ${value.name}`);
              navigate(`/notes/tags/${value.name}`);
            }}
          >
            <TagIcon className="inline" /> {value.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tags;
