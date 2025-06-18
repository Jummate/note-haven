import { useParams } from 'react-router-dom';

import FloatingCreateNoteButton from '../components/FloatingCreateNoteButton';
import NoteLayout from '../../../shared/layouts/NoteLayout';
import DesktopLayout from '../../../shared/layouts/DesktopLayout';
import MobileLayout from '../../../shared/layouts/MobileLayout';
import EmptyPageContainer from '../containers/EmptyPageContainer';
import NoteList from '../components/NoteList';
import PageHeader from '../shared/components/PageHeader';
import CreateNoteButton from '../components/CreateNoteButton';
import NotePreview from '../components/NotePreview';
import ResponsiveLayout from '../../../shared/layouts/ResponsiveLayout';
import ActionButtonsPanel from '../../../shared/containers/ActionButtonsPanel';
import { NOTES_URL } from '../constants/urls';
import { useNotes } from '../hooks/useNotes';
import { NoteForReviewType, PopulatedNote } from '../types';
import { withErrorBoundary } from '../../../shared/components/WithErrorBoundary';
import { ErrorFallback } from '../../../shared/components/ErrorFallback';
import { useNoteStore } from '../stores/noteStore';
import { SidebarLabels } from '../constants/labels';

function NoteDashboard() {
  const { filterQuery, filteredNotes } = useNoteStore();
  const { noteId } = useParams();

  const activeNotes = useNotes({ type: 'active' }) as
    | PopulatedNote[]
    | undefined;
  const singleNote = useNotes({ noteId: noteId }) as NoteForReviewType;
  const noteToUse = filterQuery ? filteredNotes : activeNotes;
  const hasNotes = activeNotes && activeNotes.length > 0;

  const matchingRecordsFound = filterQuery
    ? filteredNotes && filteredNotes.length > 0
    : activeNotes && activeNotes.length > 0;

  const headerText = filterQuery
    ? `Showing results for ${filterQuery}`
    : SidebarLabels.ALL_NOTES.toString();

  if (!hasNotes) return <EmptyPageContainer noteType="active" />;
  return (
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout>
            <div className="flex flex-1 justify-center">
              <div className="p-8 text-secondary-900 font-inter w-full bg-white">
                <PageHeader headerText={headerText} />
                {matchingRecordsFound ? (
                  <NoteList data={noteToUse} path={NOTES_URL} />
                ) : (
                  <p>No matching records found</p>
                )}
              </div>
            </div>
            <FloatingCreateNoteButton />
          </MobileLayout>
        }
        desktop={
          <DesktopLayout
            firstItem={
              matchingRecordsFound ? (
                <>
                  <CreateNoteButton />
                  <NoteList data={noteToUse} path={NOTES_URL} styles="mt-4" />
                </>
              ) : (
                <p>No matching records found</p>
              )
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

const NoteDashboardWithErrorBoundary = withErrorBoundary(NoteDashboard, {
  FallbackComponent: ErrorFallback,
});

NoteDashboard.WithErrorBoundary = NoteDashboardWithErrorBoundary;

export default NoteDashboard;
