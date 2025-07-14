// src/features/notes/hooks/useNotesQuery.ts
import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '../services/noteService';

export const useNotesQuery = () => {
  return useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
    staleTime: 1000 * 60 * 5,
    retry: 1,
    // refetchOnWindowFocus: false,
  });
};
