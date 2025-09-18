// import { Input, ShowError, VerticalWrapper } from '../../../shared/components';
// import { AppIcons } from '../../../shared/icons/Icons';
// import TagSelect from '../../tags/components/TagSelect';
// import AutoResizeTextarea from '../../../shared/components/AutoResizeTextArea';
// import { NoteDraft } from '../pages/CreateNotePage';
// import { TagOption } from '../../tags/types';
// import { useValidation } from '../hooks/useValidation';
// import { validationRules } from '../utils/validation';

// type NoteEditorProps = {
//   validationError?: Record<string, string>;
//   noteData: NoteDraft;
//   setNoteData: React.Dispatch<React.SetStateAction<NoteDraft>>;
// };

// function NoteEditor({ setNoteData, validationError }: NoteEditorProps) {
//   const TagIcon = AppIcons['tags'];
//   const ClockIcon = AppIcons['clock'];
//   console.log('ncnvnv', validationError);

//   const { values, errors, handleChange } = useValidation({
//     initialValues: {
//       noteTitle: '',
//       noteTags: [],
//       noteContent: '',
//     },
//     validationRules,
//     setParentData: setNoteData,
//   });

//   return (
//     <section className="w-full">
//       <VerticalWrapper>
//         <Input
//           styles="text-3xl placeholder:text-black placeholder:font-bold font-inter border-none text-black font-bold font-inter mb-3"
//           placeholder="Enter a title..."
//           value={values.noteTitle as string}
//           name="noteTitle"
//           onChange={handleChange}
//         />

//         {errors.noteTitle && (
//           <ShowError message={errors.noteTitle} id="noteTitle-error" />
//         )}

//         {/* {errors.noteTitle && (
//           <ShowError
//             message={errors.noteTitle || validationError?.noteTitle || ''}
//             id="noteTitle-error"
//           />
//         )} */}
//       </VerticalWrapper>

//       <section className="flex flex-col gap-6 text-secondary-700">
//         <div className="grid grid-cols-[120px_1fr] items-center">
//           <span>
//             <TagIcon className="inline text-secondary-500" /> Tags
//           </span>
//           <VerticalWrapper>
//             <TagSelect
//               name="noteTags"
//               value={values.noteTags as TagOption[]}
//               onChange={handleChange}
//             />
//             {errors.noteTags && (
//               <ShowError message={errors.noteTags} id="noteTags-error" />
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

//         <VerticalWrapper>
//           {errors.noteContent && (
//             <ShowError message={errors.noteContent} id="noteContent-error" />
//           )}
//           <AutoResizeTextarea
//             name="noteContent"
//             value={values.noteContent as string}
//             onChange={handleChange}
//             placeholder="Start typing your note here..."
//           />
//         </VerticalWrapper>
//       </section>
//     </section>
//   );
// }

// export default NoteEditor;

import {
  HorizontalLine,
  Input,
  ShowError,
  VerticalWrapper,
} from '../../../shared/components';
import { AppIcons } from '../../../shared/icons/Icons';
import TagSelect from '../../tags/components/TagSelect';
import AutoResizeTextarea from '../../../shared/components/AutoResizeTextArea';
import { TagOption } from '../../tags/types';

type NoteEditorProps = {
  values: Record<string, string | TagOption[]>;
  errors: Record<string, string>;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
};

function NoteEditor({ values, errors, handleChange }: NoteEditorProps) {
  const TagIcon = AppIcons['tags'];
  const ClockIcon = AppIcons['clock'];

  return (
    <section className="w-full">
      <VerticalWrapper>
        <Input
          styles="text-3xl placeholder:text-default placeholder:font-bold font-inter border-none text-default font-bold font-inter mb-3"
          placeholder="Enter a title..."
          value={values.noteTitle as string}
          name="noteTitle"
          onChange={handleChange}
        />
        {errors.noteTitle && (
          <ShowError message={errors.noteTitle} id="noteTitle-error" />
        )}
      </VerticalWrapper>

      <section className="flex flex-col gap-6 text-dim">
        <div className="grid grid-cols-[120px_1fr] items-center">
          <span>
            <TagIcon className="inline text-muted" /> Tags
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
            <ClockIcon className="inline text-muted" /> Last Edited
          </span>
          <span className="text-muted">Not yet started</span>
        </div>

        {/* <hr className="border-secondary-200" /> */}
        <HorizontalLine styles="my-6" />

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
