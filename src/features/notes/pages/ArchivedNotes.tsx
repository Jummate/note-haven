// import React from "react";

// function ArchivedNotes() {
//   return (
//     <div className="flex-1 flex flex-col">
//       <div className="grid grid-cols-[1fr_2fr_1fr]">
//         <div className="p-10">Archived Notes</div>
//         <div className="">2</div>
//         <div className="">3</div>
//       </div>
//     </div>
//   );
// }

// export default ArchivedNotes;

import React from "react";
import { Button } from "../../../shared/components";
import { Icons } from "../../../shared/icons/Icons";
import logo from "../../../assets/logo.svg";
import { useTabStore } from "../stores/tabStore";
import { tabsMap } from "../constants/tabs";
import EmptyNote from "../components/EmptyNote";
import { useTabText } from "../hooks/useTabText";

function ArchivedNotes() {
  const Icon = Icons["plus"];
  const allNotes: string[] = [];
  const noNotes = allNotes && allNotes.length == 0;

  const { activeTabText } = useTabText();
  //   const activeTab = useTabStore((state) => state.activeTab);

  //   const { text: activeTabText } = tabsMap[activeTab];
  return (
    <div className="flex-1 flex flex-col">
      <div className="hidden lg:grid grid-cols-[1fr_2fr_1fr] flex-1">
        <div className="p-10 px-7 border border-r-1 border-y-0 border-l-0">
          <div className="mb-12">
            <Button styles="flex items-center gap-3 justify-center md:text-md text-nowrap font-semibold">
              {/* <Icon
                size={10}
                // className="inline"
              /> */}
              + Create New Note
            </Button>
          </div>

          <div>
            {noNotes ? (
              <EmptyNote noteType="archived" />
            ) : (
              <div>There is something there</div>
            )}
          </div>
        </div>
        {!noNotes && <div className="">2</div>}
        {!noNotes && <div className="">3</div>}
      </div>

      <div className="flex flex-col flex-1 lg:hidden bg-secondary-100">
        <div className="p-8">
          <div className="">
            <img
              src={logo}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          {noNotes ? (
            <div className="p-8 text-secondary-900 font-inter w-full bg-white">
              <h1 className="font-bold text-4xl font-inter mb-4">
                {activeTabText}
              </h1>
              <EmptyNote noteType="archived" />
            </div>
          ) : (
            <div className="p-8 text-secondary-900 font-inter w-full bg-white">
              There is something there
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArchivedNotes;
