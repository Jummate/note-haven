import { useParams } from 'react-router-dom';

import FloatingCreateNoteButton from '../components/FloatingCreateNoteButton';
import NoteLayout from '../../../shared/layouts/NoteLayout';
import DesktopLayout from '../../../shared/layouts/DesktopLayout';
import MobileLayout from '../../../shared/layouts/MobileLayout';
import NoteList from '../components/NoteList';
import CreateNoteButton from '../components/CreateNoteButton';
import NotePreview from '../components/NotePreview';
import ActionButtonsPanel from '../../../shared/containers/ActionButtonsPanel';
import ResponsiveLayout from '../../../shared/layouts/ResponsiveLayout';
import { ARCHIVED_URL } from '../constants/urls';
import { NoteForReviewType, NoteProps } from '../types';
import { useNotes } from '../hooks/useNotes';
import { withErrorBoundary } from '../../../shared/components/WithErrorBoundary';
import { ErrorFallback } from '../../../shared/components/ErrorFallback';

function ArchivedNoteDetailsPage() {
  const { noteId } = useParams();

  const archivedNotes = useNotes({ type: 'active' }) as NoteProps[] | undefined;
  const singleNote = useNotes({ noteId: noteId }) as NoteForReviewType;
  const hasNotes = archivedNotes && archivedNotes.length > 0;

  return (
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout>
            <ActionButtonsPanel type="archived" />
            <hr className=" bg-secondary-100 my-6 h-1" />
            <NotePreview
              note={singleNote}
              showNote={!!noteId && !!singleNote && hasNotes}
            />
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
            secondItem={
              <NotePreview
                note={singleNote}
                showNote={!!noteId && !!singleNote && hasNotes}
              />
            }
            thirdItem={
              <ActionButtonsPanel
                showNote={!!noteId && !!singleNote && hasNotes}
                type="archived"
              />
            }
          />
        }
      />
    </NoteLayout>
  );
}

const ArchivedNoteDetailsPageWithErrorBoundary = withErrorBoundary(
  ArchivedNoteDetailsPage,
  {
    FallbackComponent: ErrorFallback,
  },
);

ArchivedNoteDetailsPage.WithErrorBoundary =
  ArchivedNoteDetailsPageWithErrorBoundary;

export default ArchivedNoteDetailsPage;
