import FloatingCreateNoteButton from "../components/FloatingCreateNoteButton";
import NoteLayout from "../../../shared/layouts/NoteLayout";
import DesktopLayout from "../../../shared/layouts/DesktopLayout";
import MobileLayout from "../../../shared/layouts/MobileLayout";
import EmptyPageContainer from "../containers/EmptyPageContainer";
import NoteList from "../components/NoteList";
import PageHeader from "../shared/components/PageHeader";
import CreateNoteButton from "../components/CreateNoteButton";
import ResponsiveLayout from "../../../shared/layouts/ResponsiveLayout";
import { ARCHIVED_URL } from "../constants/urls";
import NoContent from "../../../shared/components/NoContent";
import ActionButtonsPanel from "../../../shared/containers/ActionButtonsPanel";
import { useNotes } from "../hooks/useNotes";
import { PopulatedNote } from "../types";

function ArchivedNotes() {
  const archivedNotes = useNotes({ type: "archived" }) as
    | PopulatedNote[]
    | undefined;
  const hasNotes = archivedNotes && archivedNotes.length > 0;

  if (!hasNotes) return <EmptyPageContainer noteType="archived" />;

  return (
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout>
            <div className="flex flex-1 justify-center">
              <div className="p-8 text-secondary-900 font-inter w-full bg-white">
                <PageHeader headerText="Archived Notes" />
                <NoteList
                  data={archivedNotes}
                  path={ARCHIVED_URL}
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
                  data={archivedNotes}
                  path={ARCHIVED_URL}
                  styles="mt-4"
                />
              </>
            }
            secondItem={<NoContent text="Select a note to preview" />}
            thirdItem={<ActionButtonsPanel showActionButtons={false} />}
          />
        }
      />
    </NoteLayout>
  );
}

export default ArchivedNotes;
