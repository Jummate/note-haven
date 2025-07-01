import { useState } from 'react';
import { Input } from '../../../shared/components';
import { AppIcons } from '../../../shared/icons/Icons';
import TagSelect from '../../tags/components/TagSelect';
import AutoResizeTextarea from '../../../shared/components/AutoResizeTextArea';

function NoteEditor() {
  const TagIcon = AppIcons['tags'];
  const ClockIcon = AppIcons['clock'];
  const [content, setContent] = useState<string>('');
  return (
    <section className="w-full">
      <Input
        styles="text-3xl placeholder:text-black placeholder:font-bold font-inter border-none text-black font-bold font-inter mb-3"
        placeholder="Enter a title..."
      />
      <section className="flex flex-col gap-6 text-secondary-700">
        <div className="grid grid-cols-[120px_1fr] items-center">
          <span>
            <TagIcon className="inline text-secondary-500" /> Tags
          </span>
          <TagSelect />
        </div>
        <div className="grid grid-cols-[120px_1fr]">
          <span className="flex items-center gap-2">
            <ClockIcon className="inline text-secondary-500" /> Last Edited
          </span>
          <span className="text-secondary-500">Not yet started</span>
        </div>
        <hr className="border-secondary-200" />
        {/* <Editor value={content} onChange={setContent} /> */}
        <AutoResizeTextarea value={content} onChange={setContent} />
      </section>
    </section>
  );
}

export default NoteEditor;
