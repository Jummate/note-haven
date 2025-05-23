import FloatingCreateNoteButton from "../components/FloatingCreateNoteButton";
import NoteLayout from "../../../shared/layouts/NoteLayout";
import DesktopLayout from "../../../shared/layouts/DesktopLayout";
import MobileLayout from "../../../shared/layouts/MobileLayout";
import EmptyPageContainer from "../containers/EmptyPageContainer";
import NoteList from "../components/NoteList";
import PageHeader from "../shared/components/PageHeader";
import CreateNoteButton from "../components/CreateNoteButton";
import NotePreview from "../components/NotePreview";
import ResponsiveLayout from "../../../shared/layouts/ResponsiveLayout";
import ActionButtonsPanel from "../../../shared/containers/ActionButtonsPanel";
import { useNoteStore } from "../stores/noteStore";
import { useParams } from "react-router-dom";

function NoteDashboard() {
  const { noteId } = useParams();

  const getNotes = useNoteStore((state) => state.getNotes);
  const allNotes = getNotes();
  const getNoteById = useNoteStore((state) => state.getNoteById);
  const singleNote = getNoteById(noteId || "");

  const hasNotes = allNotes && allNotes.length > 0;

  if (!hasNotes) return <EmptyPageContainer noteType="notes" />;
  return (
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout>
            <div className="flex flex-1 justify-center">
              <div className="p-8 text-secondary-900 font-inter w-full bg-white">
                <PageHeader headerText="All Notes" />
                <NoteList data={allNotes} path="/notes" />
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
                <NoteList data={allNotes} path="/notes" />
              </>
            }
            secondItem={<NotePreview note={singleNote} showNote={false} />}
            thirdItem={<ActionButtonsPanel showNote={false} />}
          />
        }
      />
    </NoteLayout>
  );
}

export default NoteDashboard;
