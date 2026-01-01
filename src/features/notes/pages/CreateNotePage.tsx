import NoteLayout from '../../../shared/layouts/NoteLayout';
import DesktopLayout from '../../../shared/layouts/DesktopLayout';
import MobileLayout from '../../../shared/layouts/MobileLayout';
import NoteList from '../components/NoteList';
import CreateNoteButton from '../components/CreateNoteButton';
import ResponsiveLayout from '../../../shared/layouts/ResponsiveLayout';
import { NOTES_URL } from '../constants/urls';
import NoteActionButtons from '../components/NoteActionButtons';
import ActionButtonsPanel from '../../../shared/containers/ActionButtonsPanel';
import { useNotes } from '../hooks/useNotes';
import { NoteProps } from '../types';
import { withErrorBoundary } from '../../../shared/components/WithErrorBoundary';
import { ErrorFallback } from '../../../shared/components/ErrorFallback';
import NoteEditor from '../components/NoteEditor';
import { useState } from 'react';
import { TagOption } from '../../tags/types';
import useCreateNoteMutation from '../hooks/useCreateNoteMutation';
import { useValidation } from '../hooks/useValidation';
import { validationRules } from '../utils/validation';
import { HorizontalLine } from '../../../shared/components';

export type NoteDraft = {
  noteTitle: string;
  noteContent: string;
  noteTags: TagOption[];
};

function CreateNotePage() {
  const allNotes = useNotes({ type: 'active' }) as NoteProps[] | undefined;
  const [noteData, setNoteData] = useState<NoteDraft>({
    noteTitle: '',
    noteContent: '',
    noteTags: [],
  });

  const { mutateAsync: createNote } = useCreateNoteMutation();

  const validation = useValidation({
    initialValues: noteData,
    validationRules,
    setParentData: setNoteData,
    onSubmit: () =>
      createNote({
        title: noteData.noteTitle,
        content: noteData.noteContent,
        input_tags: noteData.noteTags,
      }),
  });

  return (
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout>
            <div className="flex flex-1 justify-center">
              <div className="p-4 text-default font-inter w-full bg-inverted">
                <ActionButtonsPanel onNoteSave={validation.handleSubmit} />
                {/* <hr className="bg-secondary-100 my-6 h-1" /> */}
                <HorizontalLine styles="my-6" />
                <NoteEditor
                  values={validation.values}
                  errors={validation.errors}
                  handleChange={validation.handleChange}
                />
              </div>
            </div>
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
                <NoteEditor
                  values={validation.values}
                  errors={validation.errors}
                  handleChange={validation.handleChange}
                />
                <NoteActionButtons
                  onCancel={() => console.log('note cancelled')}
                  onNoteSave={validation.handleSubmit}
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
