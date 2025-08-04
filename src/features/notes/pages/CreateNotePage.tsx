import NoteLayout from '../../../shared/layouts/NoteLayout';
import DesktopLayout from '../../../shared/layouts/DesktopLayout';
import MobileLayout from '../../../shared/layouts/MobileLayout';
// import EmptyPageContainer from '../containers/EmptyPageContainer';
import NoteList from '../components/NoteList';
import CreateNoteButton from '../components/CreateNoteButton';
import ResponsiveLayout from '../../../shared/layouts/ResponsiveLayout';
// import FloatingCreateNoteButton from "../components/FloatingCreateNoteButton";
import { NOTES_URL } from '../constants/urls';
import NoteActionButtons from '../components/NoteActionButtons';
import ActionButtonsPanel from '../../../shared/containers/ActionButtonsPanel';
import { useNotes } from '../hooks/useNotes';
// import { PopulatedNote } from '../types';
import { NoteProps } from '../types';
import { withErrorBoundary } from '../../../shared/components/WithErrorBoundary';
import { ErrorFallback } from '../../../shared/components/ErrorFallback';
import NoteEditor from '../components/NoteEditor';
import { useState } from 'react';
import { TagOption } from '../../tags/types';

import useCreateNoteMutation from '../hooks/useCreateNoteMutation';

export type NoteDraft = {
  noteTitle: string;
  noteContent: string;
  noteTags: TagOption[];
};

function CreateNotePage() {
  const allNotes = useNotes({ type: 'active' }) as NoteProps[] | undefined;
  // const hasNotes = allNotes && allNotes.length > 0;
  const [noteData, setNoteData] = useState<NoteDraft>({
    noteTitle: '',
    noteContent: '',
    noteTags: [],
  });

  // console.log('okay', noteData.noteContent);
  // console.log('okay2', noteData.noteTitle);

  const { mutateAsync: createNote } = useCreateNoteMutation();
  // if (!hasNotes) return <EmptyPageContainer noteType="active" />;

  const handleNoteSave = async () => {
    // const tags = noteData.tags.map(tag => {id:tag.value, name:tag.label});
    await createNote({
      title: noteData.noteTitle,
      content: noteData.noteContent,
      input_tags: noteData.noteTags,
    });
  };

  return (
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout>
            <div className="flex flex-1 justify-center">
              <div className="p-4 text-secondary-900 font-inter w-full bg-white">
                <ActionButtonsPanel onNoteSave={handleNoteSave} />
                <hr className=" bg-secondary-100 my-6 h-1" />
                <NoteEditor noteData={noteData} setNoteData={setNoteData} />
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
                <NoteEditor noteData={noteData} setNoteData={setNoteData} />
                <NoteActionButtons
                  onCancel={() => console.log('note cancelled')}
                  onNoteSave={handleNoteSave}
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
