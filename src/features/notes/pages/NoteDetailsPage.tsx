// import React from "react";
import { Button } from "../../../shared/components";
import { Icons } from "../../../shared/icons/Icons";
// import logo from "../../../assets/logo.svg";
// import { useTabStore } from "../stores/tabStore";
// import { tabsMap } from "../constants/tabs";
// import EmptyNote from "../components/EmptyNote";
// import { useTabText } from "../hooks/useTabText";
import FloatingCreateNoteButton from "../shared/components/FloatingCreateNoteButton";
import NoteLayout from "../layouts/NoteLayout";
import DesktopLayout from "../layouts/DesktopLayout";
import MobileLayout from "../layouts/MobileLayout";
// import EmptyPageMobile from "../shared/containers/EmptyPageMobile";
import EmptyPageContainer from "../containers/EmptyPageContainer";
import NoteList from "../components/NoteList";
import PageHeader from "../shared/components/PageHeader";
import CreateNoteButton from "../shared/components/CreateNoteButton";

import { useHeaderStore } from "../stores/headerStore";
import NotePreview from "../components/NotePreview";
import { useParams } from "react-router-dom";

function NoteDetailsPage() {
  // const { setHeaderText } = useHeaderStore();
  // setHeaderText("All Notes");
  // const PlusIcon = Icons["plus"];

  const { noteSlug } = useParams();

  const ArchivedIcon = Icons["archived"];
  const DeleteIcon = Icons["delete"];
  const allNotes: string[] = [
    "okay",
    "Hello",
    "World",
    "You",
    "are",
    "Welcome",
  ];
  const hasNotes = allNotes && allNotes.length > 0;

  // const { activeTabText } = useTabText();
  //   const activeTab = useTabStore((state) => state.activeTab);

  //   const { text: activeTabText } = tabsMap[activeTab];
  return (
    <div className="border border-r-1 border-y-0 border-l-1 relative flex">
      <NotePreview />
      <div className="absolute bottom-0 left-0 border border-x-0 border-t-1 border-b-0 flex w-full flex-1 p-7 gap-5">
        <Button styles="md:text-md w-auto">Save Note</Button>
        <Button
          variant="outline"
          styles="md:text-md bg-secondary-200 border-none w-auto"
        >
          Cancel
        </Button>
      </div>
    </div>
    // <div className="flex-1 flex flex-col">
    //   {hasNotes ? (
    //     <NoteLayout>
    //       <DesktopLayout>
    //         <div className="p-10 px-7">
    //           <div className="mb-12">
    //             <CreateNoteButton />
    //           </div>
    //           <div className="divide-y divide-secondary-200">
    //             <NoteList
    //               notes={allNotes}
    //               path="/notes"
    //             />
    //           </div>
    //         </div>
    //         <div className="border border-r-1 border-y-0 border-l-1 relative flex">
    //           <NotePreview />
    //           <div className="absolute bottom-0 left-0 border border-x-0 border-t-1 border-b-0 flex w-full flex-1 p-7 gap-5">
    //             <Button styles="md:text-md w-auto">Save Note</Button>
    //             <Button
    //               variant="outline"
    //               styles="md:text-md bg-secondary-200 border-none w-auto"
    //             >
    //               Cancel
    //             </Button>
    //           </div>
    //         </div>
    //         <div className="p-5">
    //           <div className="flex flex-col gap-3">
    //             <Button
    //               variant="outline"
    //               styles="md:text-md"
    //             >
    //               <ArchivedIcon size={20} /> Archive Note
    //             </Button>
    //             <Button
    //               variant="outline"
    //               styles="md:text-md"
    //             >
    //               <DeleteIcon /> Delete Note
    //             </Button>
    //           </div>
    //         </div>
    //       </DesktopLayout>
    //       <MobileLayout>
    //         <div className="flex flex-1 justify-center">
    //           <div className="p-8 text-secondary-900 font-inter w-full bg-white">
    //             <PageHeader headerText="All Notes" />
    //             <div className="divide-y divide-secondary-200">
    //               <NoteList
    //                 notes={allNotes}
    //                 path="/notes"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         <FloatingCreateNoteButton />
    //       </MobileLayout>
    //     </NoteLayout>
    //   ) : (
    //     <EmptyPageContainer noteType="notes" />
    //   )}
    // </div>
  );
}

export default NoteDetailsPage;
