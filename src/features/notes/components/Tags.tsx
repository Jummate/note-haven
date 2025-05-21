// import React from 'react';
import { Icons } from "../../../shared/icons/Icons";
import clsx from "clsx";

import { useNavigate } from "react-router-dom";

import { useHeaderStore } from "../stores/headerStore";

type TagsProps = {
  divider?: "vertical" | "horizontal";
  styles?: string;
  titleStyles?: string;
  listItemStyles?: string;
};
// divide-y divide-secondary-200
function Tags({ styles, divider, titleStyles, listItemStyles }: TagsProps) {
  const navigate = useNavigate();
  const { setHeaderText } = useHeaderStore();
  const TagIcon = Icons["tags"];
  const tags: string[] = [
    "Cooking",
    "Dev",
    "Fitness",
    "Health",
    "Personal",
    "Recipe",
  ];
  if (!tags || tags?.length == 0) return null;
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
        {tags.map((tag) => (
          <li
            key={tag}
            className={clsx("py-4 cursor-pointer", listItemStyles)}
            onClick={() => {
              setHeaderText(`Showing result for ${tag}`);
              navigate(`notes/tags/${tag}`);
            }}
          >
            <TagIcon className="inline" /> {tag}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tags;
