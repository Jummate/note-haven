import React from "react";
import { Button } from "../../../shared/components";
import { Icons } from "../../../shared/icons/Icons";
import logo from "../../../assets/logo.svg";
import { useTabStore } from "../stores/tabStore";
import { tabsMap } from "../constants/tabs";
import EmptyNote from "../components/EmptyNote";
import { useTabText } from "../hooks/useTabText";
import CreateNewNoteIcon from "../shared/components/CreateNewNoteIcon";
import NotePage from "../shared/containers/NotePage";
import DesktopContainer from "../shared/containers/DesktopContainer";
import MobileContainer from "../shared/containers/MobileContainer";
import EmptyPageMobile from "../shared/containers/EmptyPageMobile";
import EmptyPage from "../components/EmptyPage";

function AllNotes() {
  const PlusIcon = Icons["plus"];
  const allNotes: string[] = [];
  const noNotes = allNotes && allNotes.length == 0;

  const { activeTabText } = useTabText();
  //   const activeTab = useTabStore((state) => state.activeTab);

  //   const { text: activeTabText } = tabsMap[activeTab];
  return (
    // <NotePage>
    //   <DesktopContainer>
    //     <div className="p-10 px-7 border border-r-1 border-y-0 border-l-0">
    //       <div className="mb-12">
    //         <Button styles="flex items-center gap-3 justify-center md:text-md text-nowrap font-semibold">
    //           {/* <Icon
    //             size={10}
    //             // className="inline"
    //           /> */}
    //           + Create New Note
    //         </Button>
    //       </div>

    //       <div>
    //         {noNotes ? (
    //           <EmptyNote noteType="notes" />
    //         ) : (
    //           <div>There is something there</div>
    //         )}
    //       </div>
    //     </div>
    //     {!noNotes && <div className="">2</div>}
    //     {!noNotes && <div className="">3</div>}
    //   </DesktopContainer>
    //   <MobileContainer>
    //     <div className="flex flex-1 justify-center">
    //       {noNotes ? (
    //         <EmptyPageMobile>
    //           <EmptyNote noteType="notes" />
    //           <hr className="hidden sm:block mt-7" />
    //           <CreateNewNoteIcon />
    //         </EmptyPageMobile>
    //       ) : (
    //         <div className="p-8 text-secondary-900 font-inter w-full bg-white">
    //           There is something there
    //         </div>
    //       )}
    //     </div>
    //   </MobileContainer>
    // </NotePage>

    <div className="flex-1 flex flex-col">
      <EmptyPage noteType="notes" />
    </div>
  );
}

export default AllNotes;
