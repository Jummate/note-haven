// import React from 'react';
import { useNavigate } from "react-router-dom";

import clsx from "clsx";

import { AppIcons } from "../../../shared/icons/Icons";
import { useHeaderStore } from "../../notes/stores/headerStore";
import { TagsProps } from "../types";
import { useNoteStore } from "../../notes/stores/noteStore";
import NoContent from "../../../shared/components/NoContent";
import { TAGS_URL } from "../../notes/constants/urls";
import { useTabStore } from "../../notes/stores/tabStore";

function Tags({ styles, divider, titleStyles, listItemStyles }: TagsProps) {
  const navigate = useNavigate();
  const { setHeaderText } = useHeaderStore();
  const { activeTabs, setActiveTab } = useTabStore();
  const TagIcon = AppIcons["tags"];
  const ChevRonRight = AppIcons.chevronRight;

  const tags = useNoteStore((state) => state.tagMap);

  if (!tags || tags.size == 0) {
    return <NoContent text="No tags found" styles="pt-5" />;
    // return <p className="text-secondary-500 italic">No tags found</p>;
  }
  // const dividerStyles =
  //   divider == "vertical"
  //     ? "divide-y divide-secondary-200"
  //     : divider == "horizontal"
  //     ? "divide-x divide-secondary-200"
  //     : "";
  const dividerStyles = clsx({
    "divide-y divide-secondary-200": divider === "vertical",
    "divide-x divide-secondary-200": divider === "horizontal",
  });


  return (
    <section className={clsx("flex flex-col", styles)}>
      <h2 className={clsx("mb-5", titleStyles)}>Tags</h2>

      <ul className={clsx("flex flex-col", dividerStyles)}>
        {Array.from(tags).map(([key, value]) => {
          const isActive = activeTabs.sidebar == value.name;
          return (
            <li
              key={key}
              role="button"
              tabIndex={0}
              className={clsx(
                "flex justify-between py-4 px-3 cursor-pointer rounded-xl",
                { "bg-primary-50": isActive },
                listItemStyles
              )}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setHeaderText(`Showing result for ${value.name}`);
                  navigate(`/${TAGS_URL}/${value.name}`);
                }
              }}
              onClick={() => {
                setHeaderText(`Showing result for ${value.name}`);
                setActiveTab("sidebar", value.name);
                navigate(`/${TAGS_URL}/${value.name}`);
              }}
            >
              <span className={clsx("hover:text-primary-500/80",{"font-semibold":isActive})}>
                <TagIcon
                  className={clsx("inline mr-2", {
                    "text-primary-500": isActive,
                  })}
                />
                {value.name}
              </span>
              <span> {isActive && <ChevRonRight size={20} />}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Tags;
