// src/features/notes/hooks/useSyncNotes.ts
import { useEffect } from 'react';
import { useNotesQuery } from './useNotesQuery';
import { useNoteStore } from '../stores/noteStore';

export const useSyncNotes = () => {
  const { data: notes, isLoading, isError } = useNotesQuery();
  const setNotes = useNoteStore(state => state.setNotes);

  useEffect(() => {
    if (notes) {
      console.log('myNotes', notes);
      setNotes(notes);
    }
  }, [notes, setNotes]);

  return { notes, isLoading, isError };
};
