import { useNoteStore } from '../stores/noteStore';

type UseNotesProps = {
  type?: 'active' | 'archived' | 'all';
  noteId?: string;
};

export const useNotes = ({ type, noteId }: UseNotesProps) => {
  const { getActiveNotes, getNoteById, getNotes, getArchivedNotes } =
    useNoteStore();
  if (type === 'active') return getActiveNotes();
  if (type === 'archived') return getArchivedNotes();
  if (type === 'all') return getNotes();
  if (noteId) return getNoteById(noteId || '');
  return null;
};
