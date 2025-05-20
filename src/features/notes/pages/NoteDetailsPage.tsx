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
import ActionButtonsPanel from "../containers/ActionButtonsPanel";
import ResponsiveLayout from "../layouts/ResponsiveLayout";

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

  // const hasNotes = allNotes && allNotes.length > 0;

  // const { activeTabText } = useTabText();
  //   const activeTab = useTabStore((state) => state.activeTab);

  //   const { text: activeTabText } = tabsMap[activeTab];
  return (
    <div className="flex-1 flex flex-col">
      <NoteLayout>
        <ResponsiveLayout
          mobile={
            <MobileLayout>
              <div className="flex flex-1 justify-center">
                <div className="p-8 flex flex-col text-secondary-900 font-inter w-full bg-white gap-7">
                  {/* <PageHeader headerText="All Notes" styles="px-8"/> */}
                  <ActionButtonsPanel/>
                  <hr />
                  <NotePreview />
                </div>
              </div>
              <FloatingCreateNoteButton />
            </MobileLayout>
          }
          desktop={
            <DesktopLayout>
              <div className="p-10 px-7">
                <div className="mb-12">
                  <CreateNoteButton />
                </div>
                <NoteList notes={allNotes} path="/notes" />
              </div>
              <div className="border border-r-1 border-y-0 border-l-1 relative flex p-8">
                <NotePreview/>
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
              <div className="p-5">
                <ActionButtonsPanel showNote={true}/>
              </div>
            </DesktopLayout>
          }
        />
      </NoteLayout>
    </div>
  );
}

export default NoteDetailsPage;
