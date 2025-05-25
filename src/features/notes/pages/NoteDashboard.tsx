import { useParams } from "react-router-dom";

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
import { NOTES_URL } from "../constants/urls";
import { useNotes } from "../hooks/useNotes";
import { NoteForReviewType, PopulatedNote } from "../types";

function NoteDashboard() {
  const { noteId } = useParams();

  const activeNotes = useNotes({ type: "active" }) as
    | PopulatedNote[]
    | undefined;
  const singleNote = useNotes({ noteId: noteId }) as NoteForReviewType;
  const hasNotes = activeNotes && activeNotes.length > 0;

  if (!hasNotes) return <EmptyPageContainer noteType="active" />;
  return (
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout>
            <div className="flex flex-1 justify-center">
              <div className="p-8 text-secondary-900 font-inter w-full bg-white">
                <PageHeader headerText="All Notes" />
                <NoteList
                  data={activeNotes}
                  path={NOTES_URL}
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
                  data={activeNotes}
                  path={NOTES_URL}
                />
              </>
            }
            secondItem={
              <NotePreview
                note={singleNote}
                showNote={!!noteId && !!singleNote && hasNotes}
                // showNote={false}
              />
            }
            thirdItem={
              <ActionButtonsPanel
                showNote={!!noteId && !!singleNote && hasNotes}
              />
            }
          />
        }
      />
    </NoteLayout>
  );
}

export default NoteDashboard;
