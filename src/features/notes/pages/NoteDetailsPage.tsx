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
import NoteActionButtons from '../components/NoteActionButtons';
import { NOTES_URL } from '../constants/urls';
import { useNotes } from '../hooks/useNotes';
import { NoteForReviewType, NoteProps } from '../types';
import { withErrorBoundary } from '../../../shared/components/WithErrorBoundary';
import { ErrorFallback } from '../../../shared/components/ErrorFallback';
import { HorizontalLine } from '../../../shared/components';

function NoteDetailsPage() {
  const { noteId } = useParams();

  const activeNotes = useNotes({ type: 'active' }) as NoteProps[] | undefined;
  const singleNote = useNotes({ noteId: noteId }) as NoteForReviewType;
  const hasNotes = activeNotes && activeNotes.length > 0;

  return (
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout>
            <ActionButtonsPanel type="active" />
            {/* <hr className="bg-gray-800 my-6 h-1" /> */}
            <HorizontalLine styles="my-6" />
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
                <NoteList data={activeNotes} path={NOTES_URL} styles="mt-4" />
              </>
            }
            secondItem={
              <>
                <NotePreview
                  note={singleNote}
                  showNote={!!noteId && !!singleNote && hasNotes}
                />
                <NoteActionButtons
                  onCancel={() => console.log('note cancelled')}
                  onNoteSave={() => console.log('note saved')}
                />
              </>
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

const NoteDetailsPageWithErrorBoundary = withErrorBoundary(NoteDetailsPage, {
  FallbackComponent: ErrorFallback,
});

NoteDetailsPage.WithErrorBoundary = NoteDetailsPageWithErrorBoundary;

export default NoteDetailsPage;
