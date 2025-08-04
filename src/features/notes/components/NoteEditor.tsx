// // // // import { useState } from 'react';
// // // import { Input, ShowError, VerticalWrapper } from '../../../shared/components';
// // // import { AppIcons } from '../../../shared/icons/Icons';
// // // import TagSelect from '../../tags/components/TagSelect';
// // // import AutoResizeTextarea from '../../../shared/components/AutoResizeTextArea';
// // // import { NoteDraft } from '../pages/CreateNotePage';
// // // import { TagOption } from '../../tags/types';
// // // import { useValidation } from '../hooks/useValidation';
// // // import { validationRules } from '../utils/validation';

// // // type NoteEditorProps = {
// // //   noteData: NoteDraft;
// // //   setNoteData: React.Dispatch<React.SetStateAction<NoteDraft>>;
// // // };

// // // function NoteEditor({ noteData, setNoteData }: NoteEditorProps) {
// // //   const TagIcon = AppIcons['tags'];
// // //   const ClockIcon = AppIcons['clock'];

// // //   const { values, errors, handleChange, handleSubmit, loading } = useValidation(
// // //     {
// // //       initialValues: { title: '', tags: [], content: '' },
// // //       validationRules,
// // //     },
// // //   );

// // //   return (
// // //     <section className="w-full">
// // //       <VerticalWrapper>
// // //         <Input
// // //           styles="text-3xl placeholder:text-black placeholder:font-bold font-inter border-none text-black font-bold font-inter mb-3"
// // //           placeholder="Enter a title..."
// // //           value={noteData.title}
// // //           name="title"
// // //           onChange={e => setNoteData({ ...noteData, title: e.target.value })}
// // //         />
// // //         {errors.title && (
// // //           <ShowError message={errors.title} id="title-error" />
// // //         )}
// // //       </VerticalWrapper>
// // //       <section className="flex flex-col gap-6 text-secondary-700">
// // //         <div className="grid grid-cols-[120px_1fr] items-center">
// // //           <span>
// // //             <TagIcon className="inline text-secondary-500" /> Tags
// // //           </span>
// // //           <VerticalWrapper>
// // //             <TagSelect
// // //               value={noteData.tags}
// // //               onChange={(value: TagOption[]) =>
// // //                 setNoteData({ ...noteData, tags: value })
// // //               }
// // //               name="noteTag"
// // //             />
// // //             {errors.noteTag && (
// // //               <ShowError message={errors.noteTag} id="noteTag-error" />
// // //             )}
// // //           </VerticalWrapper>
// // //         </div>
// // //         <div className="grid grid-cols-[120px_1fr]">
// // //           <span className="flex items-center gap-2">
// // //             <ClockIcon className="inline text-secondary-500" /> Last Edited
// // //           </span>
// // //           <span className="text-secondary-500">Not yet started</span>
// // //         </div>
// // //         <hr className="border-secondary-200" />
// // //         {/* <Editor value={content} onChange={setContent} /> */}
// // //         <VerticalWrapper>
// // //           {errors.noteTag && (
// // //             <ShowError message={errors.noteTag} id="noteTag-error" />
// // //           )}
// // //           <AutoResizeTextarea
// // //             name="content"
// // //             value={noteData.content}
// // //             onChange={(val: string) =>
// // //               setNoteData({ ...noteData, content: val })
// // //             }
// // //             placeholder="Start typing your note here..."
// // //           />
// // //         </VerticalWrapper>
// // //       </section>
// // //     </section>
// // //   );
// // // }

// // // export default NoteEditor;

// // import { Input, ShowError, VerticalWrapper } from '../../../shared/components';
// // import { AppIcons } from '../../../shared/icons/Icons';
// // import TagSelect from '../../tags/components/TagSelect';
// // import AutoResizeTextarea from '../../../shared/components/AutoResizeTextArea';
// // import { NoteDraft } from '../pages/CreateNotePage';
// // import { TagOption } from '../../tags/types';
// // import { useValidation } from '../hooks/useValidation';
// // import { validationRules } from '../utils/validation';

// // type NoteEditorProps = {
// //   noteData: NoteDraft;
// //   setNoteData: React.Dispatch<React.SetStateAction<NoteDraft>>;
// // };

// // function NoteEditor({ setNoteData }: NoteEditorProps) {
// //   const TagIcon = AppIcons['tags'];
// //   const ClockIcon = AppIcons['clock'];

// //   const { values, errors, handleChange } = useValidation({
// //     initialValues: {
// //       title: '',
// //       tags: [],
// //       content: '',
// //     },
// //     validationRules,
// //     setParentData: setNoteData,
// //   });

// //   return (
// //     <section className="w-full">
// //       <VerticalWrapper>
// //         {/* <p>{values.title as string}</p>
// //         <p>{values.content as string}</p> */}
// //         <Input
// //           styles="text-3xl placeholder:text-black placeholder:font-bold font-inter border-none text-black font-bold font-inter mb-3"
// //           placeholder="Enter a title..."
// //           value={values.title as string}
// //           name="title"
// //           onChange={handleChange}
// //         />
// //         {errors.title && <ShowError message={errors.title} id="title-error" />}
// //       </VerticalWrapper>

// //       <section className="flex flex-col gap-6 text-secondary-700">
// //         <div className="grid grid-cols-[120px_1fr] items-center">
// //           <span>
// //             <TagIcon className="inline text-secondary-500" /> Tags
// //           </span>
// //           <VerticalWrapper>
// //             <TagSelect
// //               name="tags"
// //               value={values.tags as TagOption[]}
// //               onChange={handleChange}
// //             />
// //             {errors.tags && <ShowError message={errors.tags} id="tags-error" />}
// //           </VerticalWrapper>
// //         </div>

// //         <div className="grid grid-cols-[120px_1fr]">
// //           <span className="flex items-center gap-2">
// //             <ClockIcon className="inline text-secondary-500" /> Last Edited
// //           </span>
// //           <span className="text-secondary-500">Not yet started</span>
// //         </div>

// //         <hr className="border-secondary-200" />

// //         <VerticalWrapper>
// //           {errors.content && (
// //             <ShowError message={errors.content} id="content-error" />
// //           )}
// //           <AutoResizeTextarea
// //             name="content"
// //             value={values.content as string}
// //             onChange={handleChange}
// //             placeholder="Start typing your note here..."
// //           />
// //         </VerticalWrapper>
// //       </section>
// //     </section>
// //   );
// // }

// // export default NoteEditor;

// // import { useState } from 'react';
// import { Input, ShowError, VerticalWrapper } from '../../../shared/components';
// import { AppIcons } from '../../../shared/icons/Icons';
// import TagSelect from '../../tags/components/TagSelect';
// import AutoResizeTextarea from '../../../shared/components/AutoResizeTextArea';
// import { NoteDraft } from '../pages/CreateNotePage';
// import { TagOption } from '../../tags/types';
// import { useValidation } from '../hooks/useValidation';
// import { validationRules } from '../utils/validation';

// type NoteEditorProps = {
//   noteData: NoteDraft;
//   setNoteData: React.Dispatch<React.SetStateAction<NoteDraft>>;
// };

// function NoteEditor({ noteData, setNoteData }: NoteEditorProps) {
//   const TagIcon = AppIcons['tags'];
//   const ClockIcon = AppIcons['clock'];

//   const { values, errors, handleChange, handleSubmit, loading } = useValidation(
//     {
//       initialValues: { noteTitle: '', noteTags: [], noteContent: '' },
//       validationRules,
//     },
//   );

//   return (
//     <section className="w-full">
//       <VerticalWrapper>
//         <Input
//           styles="text-3xl placeholder:text-black placeholder:font-bold font-inter border-none text-black font-bold font-inter mb-3"
//           placeholder="Enter a title..."
//           value={noteData.title}
//           name="noteTitle"
//           onChange={e => setNoteData({ ...noteData, title: e.target.value })}
//         />
//         {errors.noteTitle && (
//           <ShowError message={errors.noteTitle} id="noteTitle-error" />
//         )}
//       </VerticalWrapper>
//       <section className="flex flex-col gap-6 text-secondary-700">
//         <div className="grid grid-cols-[120px_1fr] items-center">
//           <span>
//             <TagIcon className="inline text-secondary-500" /> Tags
//           </span>
//           <VerticalWrapper>
//             <TagSelect
//               value={values.tags}
//               onChange={(value: TagOption[]) =>
//                 setNoteData({ ...noteData, tags: value })
//               }
//               name="noteTag"
//             />
//             {errors.noteTag && (
//               <ShowError message={errors.noteTag} id="noteTag-error" />
//             )}
//           </VerticalWrapper>
//         </div>
//         <div className="grid grid-cols-[120px_1fr]">
//           <span className="flex items-center gap-2">
//             <ClockIcon className="inline text-secondary-500" /> Last Edited
//           </span>
//           <span className="text-secondary-500">Not yet started</span>
//         </div>
//         <hr className="border-secondary-200" />
//         {/* <Editor value={content} onChange={setContent} /> */}
//         <VerticalWrapper>
//           {errors.noteTag && (
//             <ShowError message={errors.noteTag} id="noteTag-error" />
//           )}
//           <AutoResizeTextarea
//             name="noteContent"
//             value={noteData.content}
//             onChange={(val: string) =>
//               setNoteData({ ...noteData, content: val })
//             }
//             placeholder="Start typing your note here..."
//           />
//         </VerticalWrapper>
//       </section>
//     </section>
//   );
// }

// export default NoteEditor;

import { Input, ShowError, VerticalWrapper } from '../../../shared/components';
import { AppIcons } from '../../../shared/icons/Icons';
import TagSelect from '../../tags/components/TagSelect';
import AutoResizeTextarea from '../../../shared/components/AutoResizeTextArea';
// import { NoteDraft } from '../pages/CreateNotePage';
import { TagOption } from '../../tags/types';
import { useValidation } from '../hooks/useValidation';
import { validationRules } from '../utils/validation';

// type NoteEditorProps = {
//   noteData: NoteDraft;
//   setNoteData: React.Dispatch<React.SetStateAction<NoteDraft>>;
// };

// function NoteEditor({ noteData, setNoteData }: NoteEditorProps) {
function NoteEditor() {
  const TagIcon = AppIcons['tags'];
  const ClockIcon = AppIcons['clock'];

  const { values, errors, handleChange } = useValidation({
    initialValues: {
      noteTitle: '',
      noteTags: [],
      noteContent: '',
    },
    validationRules,
  });

  return (
    <section className="w-full">
      <VerticalWrapper>
        <Input
          styles="text-3xl placeholder:text-black placeholder:font-bold font-inter border-none text-black font-bold font-inter mb-3"
          placeholder="Enter a title..."
          value={values.noteTitle as string}
          name="noteTitle"
          onChange={handleChange}
        />
        {errors.noteTitle && (
          <ShowError message={errors.noteTitle} id="noteTitle-error" />
        )}
      </VerticalWrapper>

      <section className="flex flex-col gap-6 text-secondary-700">
        <div className="grid grid-cols-[120px_1fr] items-center">
          <span>
            <TagIcon className="inline text-secondary-500" /> Tags
          </span>
          <VerticalWrapper>
            <TagSelect
              name="noteTags"
              value={values.noteTags as TagOption[]}
              onChange={handleChange}
            />
            {errors.noteTags && (
              <ShowError message={errors.noteTags} id="noteTags-error" />
            )}
          </VerticalWrapper>
        </div>

        <div className="grid grid-cols-[120px_1fr]">
          <span className="flex items-center gap-2">
            <ClockIcon className="inline text-secondary-500" /> Last Edited
          </span>
          <span className="text-secondary-500">Not yet started</span>
        </div>

        <hr className="border-secondary-200" />

        <VerticalWrapper>
          {errors.noteContent && (
            <ShowError message={errors.noteContent} id="noteContent-error" />
          )}
          <AutoResizeTextarea
            name="noteContent"
            value={values.noteContent as string}
            onChange={handleChange}
            placeholder="Start typing your note here..."
          />
        </VerticalWrapper>
      </section>
    </section>
  );
}

export default NoteEditor;
