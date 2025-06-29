import NoteLayout from '../../../shared/layouts/NoteLayout';
import DesktopLayout from '../../../shared/layouts/DesktopLayout';
import MobileLayout from '../../../shared/layouts/MobileLayout';
import EmptyPageContainer from '../containers/EmptyPageContainer';
import NoteList from '../components/NoteList';
import CreateNoteButton from '../components/CreateNoteButton';
import ResponsiveLayout from '../../../shared/layouts/ResponsiveLayout';
// import FloatingCreateNoteButton from "../components/FloatingCreateNoteButton";
import { NOTES_URL } from '../constants/urls';
import NoteActionButtons from '../components/NoteActionButtons';
import ActionButtonsPanel from '../../../shared/containers/ActionButtonsPanel';
import { useNotes } from '../hooks/useNotes';
import { PopulatedNote } from '../types';
import { withErrorBoundary } from '../../../shared/components/WithErrorBoundary';
import { ErrorFallback } from '../../../shared/components/ErrorFallback';
import NoteEditor from '../components/NoteEditor';

function CreateNotePage() {
  const allNotes = useNotes({ type: 'active' }) as PopulatedNote[] | undefined;
  const hasNotes = allNotes && allNotes.length > 0;

  if (!hasNotes) return <EmptyPageContainer noteType="active" />;

  return (
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout>
            <div className="flex flex-1 justify-center">
              <div className="p-4 text-secondary-900 font-inter w-full bg-white">
                <ActionButtonsPanel />
                <hr className=" bg-secondary-100 my-6 h-1" />
                <NoteEditor />
              </div>
            </div>
            {/* <FloatingCreateNoteButton /> */}
          </MobileLayout>
        }
        desktop={
          <DesktopLayout
            firstItem={
              <>
                <CreateNoteButton />
                <NoteList data={allNotes} path={NOTES_URL} />
              </>
            }
            secondItem={
              <>
                <NoteEditor />
                <NoteActionButtons
                  onCancel={() => console.log('note cancelled')}
                  onNoteSave={() => console.log('note saved')}
                />
              </>
            }
            thirdItem={<ActionButtonsPanel showActionButtons={false} />}
          />
        }
      />
    </NoteLayout>
  );
}

const CreateNotePageWithErrorBoundary = withErrorBoundary(CreateNotePage, {
  FallbackComponent: ErrorFallback,
});

CreateNotePage.WithErrorBoundary = CreateNotePageWithErrorBoundary;

export default CreateNotePage;
