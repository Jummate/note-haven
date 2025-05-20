// import React from "react";
// import { Button } from "../../../shared/components";
// import { Icons } from "../../../shared/icons/Icons";
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

// import { useHeaderStore } from "../stores/headerStore";
import NotePreview from "../components/NotePreview";
// import { Outlet } from "react-router-dom";
// import { useResponsive } from "../../../shared/hooks/useResponsive";
import ResponsiveLayout from "../layouts/ResponsiveLayout";
import ActionButtonsPanel from "../containers/ActionButtonsPanel";

function NoteDashboard() {
  // const { setHeaderText } = useHeaderStore();
  // setHeaderText("All Notes");
  // const PlusIcon = Icons["plus"];
  // const ArchivedIcon = Icons["archived"];
  // const DeleteIcon = Icons["delete"];
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
  if (!hasNotes) return <EmptyPageContainer noteType="notes" />;
  return (
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout>
            <div className="flex flex-1 justify-center">
              <div className="p-8 text-secondary-900 font-inter w-full bg-white">
                <PageHeader headerText="All Notes" />
                <NoteList
                  notes={allNotes}
                  path="/notes"
                />
              </div>
            </div>
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
            secondItem={<NotePreview showNote={false} />}
            thirdItem={<ActionButtonsPanel showNote={false} />}
          />
        }
      />
    </NoteLayout>
  );
}

export default NoteDashboard;
