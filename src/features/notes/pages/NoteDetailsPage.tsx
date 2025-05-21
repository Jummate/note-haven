// import React from "react";
import { Button } from "../../../shared/components";
import { Icons } from "../../../shared/icons/Icons";
// import logo from "../../../assets/logo.svg";
// import { useTabStore } from "../stores/tabStore";
// import { tabsMap } from "../constants/tabs";
// import EmptyNote from "../components/EmptyNote";
// import { useTabText } from "../hooks/useTabText";
import FloatingCreateNoteButton from "../components/FloatingCreateNoteButton";
import NoteLayout from "../../../shared/layouts/NoteLayout";
import DesktopLayout from "../../../shared/layouts/DesktopLayout";
import MobileLayout from "../../../shared/layouts/MobileLayout";
// import EmptyPageMobile from "../shared/containers/EmptyPageMobile";
import EmptyPageContainer from "../containers/EmptyPageContainer";
import NoteList from "../components/NoteList";
import PageHeader from "../shared/components/PageHeader";
import CreateNoteButton from "../components/CreateNoteButton";

import { useHeaderStore } from "../stores/headerStore";
import NotePreview from "../components/NotePreview";
import { useParams } from "react-router-dom";
import ActionButtonsPanel from "../../../shared/containers/ActionButtonsPanel";
import ResponsiveLayout from "../../../shared/layouts/ResponsiveLayout";

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
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout>
            <ActionButtonsPanel />
            <hr className=" bg-secondary-100 my-6 h-1" />
            <NotePreview />
            <FloatingCreateNoteButton />
          </MobileLayout>
        }
        desktop={
          <DesktopLayout
            firstItem={
              <>
                <CreateNoteButton />
                <NoteList
                  notes={allNotes}
                  path="/notes"
                />
              </>
            }
            secondItem={
              <>
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
              </>
            }
            thirdItem={<ActionButtonsPanel />}
          />
        }
      />
    </NoteLayout>
  );
}

export default NoteDetailsPage;
