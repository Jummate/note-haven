// import React from "react";

import { useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import { generateSlug } from '../../../shared/utils/slugify';
import { NoteItem, NoteProps } from '../types';
import NoContent from '../../../shared/components/NoContent';
import { useNoteStore } from '../stores/noteStore';

function Note({
  onNoteSelect,
  note: { tags, title, createdAt },
  isActive,
}: NoteItem & { isActive: boolean }) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-3 py-4 cursor-pointer hover:bg-secondary-100 rounded-lg px-3 transition-colors',
        { 'bg-secondary-100': isActive },
      )}
      onClick={onNoteSelect}
    >
      <h1 className="font-bold text-2xl">{title}</h1>

      {tags?.length > 0 && (
        <div className="flex gap-3 flex-wrap text-lg text-secondary-800">
          {tags.map(({ id, name }) => (
            <span key={id} className="bg-secondary-200 px-3 py-1 rounded-md">
              {name}
            </span>
          ))}
        </div>
      )}

      <p className="text-lg">
        {new Date(createdAt).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </p>
    </div>
  );
}

function NoteList<T extends NoteProps>({
  data,
  path,
  styles,
}: {
  data: T[] | undefined;
  path: string;
  styles?: string;
}) {
  const navigate = useNavigate();
  const { setSelectedNoteId, selectedNoteId } = useNoteStore();

  function handleSelect(noteId: string, actualPath: string) {
    setSelectedNoteId(noteId);
    navigate(actualPath);
  }

  if (!data || data.length < 1) {
    return <NoContent text="No note to display" styles="pt-12" />;
  }

  return (
    <div className={clsx('divide-y divide-secondary-200', styles)}>
      {data.map(item => {
        const slug = generateSlug(item.title);
        const actualPath = `/${path}/${item.id}/${slug}`;
        return (
          <Note
            key={item.id}
            onNoteSelect={() => handleSelect(item.id, actualPath)}
            note={item}
            isActive={item.id === selectedNoteId}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
