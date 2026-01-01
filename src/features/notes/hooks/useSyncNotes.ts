// src/features/notes/hooks/useSyncNotes.ts
import { useEffect } from 'react';
import { useNotesQuery } from './useNotesQuery';
import { useNoteStore } from '../stores/noteStore';
// import useAuthStore from '../../auth/stores/authStore';

export const useSyncNotes = () => {
  const { data: notes, isLoading, isError } = useNotesQuery();
  const setNotes = useNoteStore(state => state.setNotes);

  useEffect(() => {
    if (notes) {
      setNotes(notes);
    } else {
    }
  }, [notes, setNotes]);

  return { notes, isLoading, isError };
};
