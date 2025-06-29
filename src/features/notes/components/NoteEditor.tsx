import { Input } from '../../../shared/components';
import { AppIcons } from '../../../shared/icons/Icons';
import TagSelect from '../../tags/components/TagSelect';

function NoteEditor() {
  const TagIcon = AppIcons['tags'];
  const ClockIcon = AppIcons['clock'];
  return (
    <section className="w-full">
      <Input
        styles="text-3xl placeholder:text-black placeholder:font-bold font-inter border-none text-black font-bold font-inter"
        placeholder="Enter a title..."
      />
      <section className="flex flex-col gap-4 text-secondary-700">
        <div className="grid grid-cols-[120px_1fr] items-start gap-2">
          <span>
            <TagIcon className="inline text-secondary-500" /> Tags
          </span>
          {/* <span>{note.tags.map((item) => item.name).toString()}</span> */}
          <span className="flex flex-wrap gap-2">
            <TagSelect />
          </span>
        </div>
        <div className="grid grid-cols-[120px_1fr]">
          <span className="flex items-center gap-2">
            <ClockIcon className="inline text-secondary-500" /> Last Edited
          </span>
          <span className="text-secondary-500">Not yet started</span>
        </div>
        <hr className="border-secondary-200 mb-6" />
      </section>
    </section>
  );
}

export default NoteEditor;
