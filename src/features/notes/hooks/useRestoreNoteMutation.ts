import { useMutation, useQueryClient } from '@tanstack/react-query';
import { restoreNote } from '../services/noteService';
// import { useNoteStore } from '../stores/noteStore';

const useRestoreNoteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (noteId: string) => restoreNote(noteId),
    onSuccess: async () => {
      // const notes = await queryClient.fetchQuery({
      //   queryKey: ['notes'],
      //   queryFn: fetchNotes,
      // });
      // useNoteStore.getState().setNotes(notes);
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });
};

export default useRestoreNoteMutation;
