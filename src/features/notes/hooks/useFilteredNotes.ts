import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNoteStore } from '../stores/noteStore';
import { NoteProps } from '../types';
import { useNotes } from './useNotes';

export function useFilteredNotes() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const rawNotes = useNotes({ type: 'active' }) as NoteProps[] | undefined;
  const activeNotes = useMemo(() => rawNotes || [], [rawNotes]);

  const { setFilterQuery, setFilteredNotes, filteredNotes } = useNoteStore();

  useEffect(() => {
    setFilterQuery(searchQuery);

    if (searchQuery && activeNotes.length > 0) {
      const results = activeNotes.filter(
        note =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.content.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredNotes(results);
    } else {
      setFilteredNotes([]);
    }
  }, [searchQuery, activeNotes, setFilterQuery, setFilteredNotes]);

  const noteToUse = useMemo(
    () => (searchQuery ? filteredNotes : activeNotes),
    [searchQuery, filteredNotes, activeNotes],
  );

  return {
    searchQuery,
    setFilterQuery,
    noteToUse,
    activeNotes,
    hasNotes: activeNotes.length > 0,
  };
}
