import React, { useState } from "react";
import { Input } from "../../../shared/components";

import { LuSettings } from "react-icons/lu";

function Display() {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <header>
      <div className="h-[10%] px-8 py-12 border-b-2 flex items-center">
        <div className="flex justify-between items-center flex-1">
          <h1 className="font-bold text-4xl font-inter">All Notes</h1>
          <div className="flex justify-center items-center gap-8">
            <Input
              name="search"
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              styles="py-2 text-xl"
            />
            <LuSettings className="text-4xl text-secondary-500" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_2fr_1fr] h-[90%]">
        <div className="p-10">1</div>
        <div className="">2</div>
        <div className="">3</div>
      </div>
    </header>
  );
}

export default Display;
