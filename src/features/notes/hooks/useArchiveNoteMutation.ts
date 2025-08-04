import { useMutation, useQueryClient } from '@tanstack/react-query';
import { archiveNote, fetchNotes } from '../services/noteService';
import { useNoteStore } from '../stores/noteStore';

const useArchiveNoteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (noteId: string) => archiveNote(noteId),
    onSuccess: async () => {
      const notes = await queryClient.fetchQuery({
        queryKey: ['notes'],
        queryFn: fetchNotes,
      });
      useNoteStore.getState().setNotes(notes);
    },
  });
};

export default useArchiveNoteMutation;
