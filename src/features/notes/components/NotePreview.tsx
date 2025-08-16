import NoContent from '../../../shared/components/NoContent';
import { AppIcons } from '../../../shared/icons/Icons';
import { NotePreviewProps } from '../types';

function NotePreview({
  note,
  type = 'active',
  showNote = true,
}: NotePreviewProps) {
  const TagIcon = AppIcons['tags'];
  const ClockIcon = AppIcons['clock'];
  const SpinnerGapIcon = AppIcons['spinnerGap'];

  if (!showNote || !note) return <NoContent text="Select a note to preview" />;

  return (
    <article className="flex flex-col flex-1 px-4">
      {/* <div className="flex flex-col gap-4"> */}
      <h1 className="font-bold text-3xl mb-6">{note.title}</h1>

      <section className="flex flex-col gap-4 text-secondary-700">
        <div className="grid grid-cols-[120px_1fr] items-start gap-2">
          <span>
            <TagIcon className="inline text-secondary-500" /> Tags
          </span>
          {/* <span>{note.tags.map((item) => item.name).toString()}</span> */}
          <span className="flex flex-wrap gap-2">
            {note.tags.length > 0 ? (
              note.tags.map(tag => (
                <span
                  key={tag.id}
                  className="bg-secondary-200 text-secondary-800 px-2 py-1 rounded-md text-sm"
                >
                  {tag.name}
                </span>
              ))
            ) : (
              <span className="italic text-secondary-400">No tags</span>
            )}
          </span>
        </div>
        {type == 'archived' && (
          <div className="grid grid-cols-[120px_1fr]">
            <span>
              <SpinnerGapIcon className="inline text-secondary-500" /> Status
            </span>
            <span className="font-weight-bold text-secondary-500">
              Archived
            </span>
          </div>
        )}
        <div className="grid grid-cols-[120px_1fr]">
          <span className="flex items-center gap-2">
            <ClockIcon className="inline text-secondary-500" /> Last Edited
          </span>
          <span>
            {' '}
            {new Date(note.updatedAt).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>
        <hr className="border-secondary-200 mb-6" />
      </section>

      <section className="text-xl leading-7 whitespace-pre-wrap">
        {note.content || <NoContent text="No content to display." />}
      </section>
      {/* </div> */}
    </article>
  );
}

export default NotePreview;
