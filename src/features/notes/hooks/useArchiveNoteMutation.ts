import { useMutation, useQueryClient } from '@tanstack/react-query';
import { archiveNote } from '../services/noteService';

const useArchiveNoteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (noteId: string) => archiveNote(noteId),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      // const notes = await queryClient.fetchQuery({
      //   queryKey: ['notes'],
      //   queryFn: fetchNotes,
      // });
      // useNoteStore.getState().setNotes(notes);
    },
  });
};

export default useArchiveNoteMutation;
