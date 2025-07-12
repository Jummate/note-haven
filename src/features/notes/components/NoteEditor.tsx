// import { useState } from 'react';
import { Input } from '../../../shared/components';
import { AppIcons } from '../../../shared/icons/Icons';
import TagSelect from '../../tags/components/TagSelect';
import AutoResizeTextarea from '../../../shared/components/AutoResizeTextArea';
import { NoteDraft } from '../pages/CreateNotePage';
import { TagOption } from '../../tags/types';

type NoteEditorProps = {
  noteData: NoteDraft;
  setNoteData: React.Dispatch<React.SetStateAction<NoteDraft>>;
};

function NoteEditor({ noteData, setNoteData }: NoteEditorProps) {
  const TagIcon = AppIcons['tags'];
  const ClockIcon = AppIcons['clock'];

  return (
    <section className="w-full">
      <Input
        styles="text-3xl placeholder:text-black placeholder:font-bold font-inter border-none text-black font-bold font-inter mb-3"
        placeholder="Enter a title..."
        value={noteData.title}
        onChange={e => setNoteData({ ...noteData, title: e.target.value })}
      />
      <section className="flex flex-col gap-6 text-secondary-700">
        <div className="grid grid-cols-[120px_1fr] items-center">
          <span>
            <TagIcon className="inline text-secondary-500" /> Tags
          </span>
          <TagSelect
            value={noteData.tags}
            onChange={(value: TagOption[]) =>
              setNoteData({ ...noteData, tags: value })
            }
          />
        </div>
        <div className="grid grid-cols-[120px_1fr]">
          <span className="flex items-center gap-2">
            <ClockIcon className="inline text-secondary-500" /> Last Edited
          </span>
          <span className="text-secondary-500">Not yet started</span>
        </div>
        <hr className="border-secondary-200" />
        {/* <Editor value={content} onChange={setContent} /> */}
        <AutoResizeTextarea
          value={noteData.content}
          onChange={(val: string) => setNoteData({ ...noteData, content: val })}
          placeholder="Start typing your note here..."
        />
      </section>
    </section>
  );
}

export default NoteEditor;
