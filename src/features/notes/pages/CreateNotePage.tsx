// import NoteLayout from '../../../shared/layouts/NoteLayout';
// import DesktopLayout from '../../../shared/layouts/DesktopLayout';
// import MobileLayout from '../../../shared/layouts/MobileLayout';
// // import EmptyPageContainer from '../containers/EmptyPageContainer';
// import NoteList from '../components/NoteList';
// import CreateNoteButton from '../components/CreateNoteButton';
// import ResponsiveLayout from '../../../shared/layouts/ResponsiveLayout';
// // import FloatingCreateNoteButton from "../components/FloatingCreateNoteButton";
// import { NOTES_URL } from '../constants/urls';
// import NoteActionButtons from '../components/NoteActionButtons';
// import ActionButtonsPanel from '../../../shared/containers/ActionButtonsPanel';
// import { useNotes } from '../hooks/useNotes';
// // import { PopulatedNote } from '../types';
// import { NoteProps } from '../types';
// import { withErrorBoundary } from '../../../shared/components/WithErrorBoundary';
// import { ErrorFallback } from '../../../shared/components/ErrorFallback';
// import NoteEditor from '../components/NoteEditor';
// import { useState } from 'react';
// import { TagOption } from '../../tags/types';

// import useCreateNoteMutation from '../hooks/useCreateNoteMutation';
// import { useValidation } from '../hooks/useValidation';
// import { validationRules } from '../utils/validation';
// import { useValidationStore } from '../stores/validationStore';

// export type NoteDraft = {
//   noteTitle: string;
//   noteContent: string;
//   noteTags: TagOption[];
// };

// function CreateNotePage() {
//   const allNotes = useNotes({ type: 'active' }) as NoteProps[] | undefined;
//   // const hasNotes = allNotes && allNotes.length > 0;
//   const [noteData, setNoteData] = useState<NoteDraft>({
//     noteTitle: '',
//     noteContent: '',
//     noteTags: [],
//   });

//   // console.log('okay', noteData.noteContent);
//   // console.log('okay2', noteData.noteTitle);

//   const { mutateAsync: createNote } = useCreateNoteMutation();
//   // if (!hasNotes) return <EmptyPageContainer noteType="active" />;
//   const errors = useValidationStore.getState().errors;

//   const { handleSubmit: handleNoteSave } = useValidation({
//     initialValues: {
//       noteTitle: '',
//       noteTags: [],
//       noteContent: '',
//     },
//     validationRules,
//     onSubmit: () =>
//       createNote({
//         title: noteData.noteTitle as string,
//         content: noteData.noteContent as string,
//         input_tags: noteData.noteTags as TagOption[],
//       }),
//   });

//   // const handleNoteSave = async () => {
//   //   // const tags = noteData.tags.map(tag => {id:tag.value, name:tag.label});
//   //   await createNote({
//   //     title: noteData.noteTitle,
//   //     content: noteData.noteContent,
//   //     input_tags: noteData.noteTags,
//   //   });
//   // };
//   console.log('asdf', errors);

//   return (
//     <NoteLayout>
//       <ResponsiveLayout
//         mobile={
//           <MobileLayout>
//             <div className="flex flex-1 justify-center">
//               <div className="p-4 text-secondary-900 font-inter w-full bg-white">
//                 <ActionButtonsPanel onNoteSave={handleNoteSave} />
//                 <hr className=" bg-secondary-100 my-6 h-1" />
//                 <NoteEditor
//                   noteData={noteData}
//                   setNoteData={setNoteData}
//                   validationError={errors}
//                 />
//               </div>
//             </div>
//             {/* <FloatingCreateNoteButton /> */}
//           </MobileLayout>
//         }
//         desktop={
//           <DesktopLayout
//             firstItem={
//               <>
//                 <CreateNoteButton />
//                 <NoteList data={allNotes} path={NOTES_URL} />
//               </>
//             }
//             secondItem={
//               <>
//                 <NoteEditor
//                   noteData={noteData}
//                   setNoteData={setNoteData}
//                   validationError={errors}
//                 />
//                 <NoteActionButtons
//                   onCancel={() => console.log('note cancelled')}
//                   onNoteSave={handleNoteSave}
//                 />
//               </>
//             }
//             thirdItem={<ActionButtonsPanel showActionButtons={false} />}
//           />
//         }
//       />
//     </NoteLayout>
//   );
// }

// const CreateNotePageWithErrorBoundary = withErrorBoundary(CreateNotePage, {
//   FallbackComponent: ErrorFallback,
// });

// CreateNotePage.WithErrorBoundary = CreateNotePageWithErrorBoundary;

// export default CreateNotePage;

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
              <div className="p-4 text-secondary-900 font-inter w-full bg-white">
                <ActionButtonsPanel onNoteSave={validation.handleSubmit} />
                <hr className="bg-secondary-100 my-6 h-1" />
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
