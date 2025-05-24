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
import NoteList from "../components/NoteList";
import CreateNoteButton from "../components/CreateNoteButton";

import NotePreview from "../components/NotePreview";
import { useParams } from "react-router-dom";
import ActionButtonsPanel from "../../../shared/containers/ActionButtonsPanel";
import ResponsiveLayout from "../../../shared/layouts/ResponsiveLayout";
import { useNoteStore } from "../stores/noteStore";

function NoteDetailsPage() {
  // const { setHeaderText } = useHeaderStore();
  // setHeaderText("All Notes");
  // const PlusIcon = Icons["plus"];

  const { noteId } = useParams();

  const getNotes = useNoteStore((state) => state.getNotes);
  const allNotes = getNotes();
  const getNoteById = useNoteStore((state) => state.getNoteById);
  const singleNote = getNoteById(noteId || "");

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
            <NotePreview note={singleNote} />
            <FloatingCreateNoteButton />
          </MobileLayout>
        }
        desktop={
          <DesktopLayout
            firstItem={
              <>
                <CreateNoteButton />
                <NoteList
                  data={allNotes}
                  path="/notes"
                />
              </>
            }
            secondItem={
              <>
                <NotePreview note={singleNote} />
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
