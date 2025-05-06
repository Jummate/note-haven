// import React from 'react';
import { Icons } from "../../../shared/icons/Icons";

function Tags() {
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
  return (
    <section className="flex flex-col gap-5 py-3">
      <h2>Tags</h2>

      <div className="flex flex-col gap-7">
        {tags.map((tag) => (
          <p key={tag}>
            <TagIcon className="inline" /> {tag}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Tags;
