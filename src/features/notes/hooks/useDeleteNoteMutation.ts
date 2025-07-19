import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNote, fetchNotes } from '../services/noteService';
import { useNoteStore } from '../stores/noteStore';
// import { fetchTags } from '../../tags/services/tagService';
// import { useTagStore } from '../../tags/stores/tagStore';
// import { notify } from '../../../shared/services/toastService';

const useDeleteNoteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (noteId: string) => deleteNote(noteId),
    onSuccess: async () => {
      //   notify({ message: 'Note created successfully!', type: 'success' });
      //   queryClient.invalidateQueries({ queryKey: ['notes', 'tags'] });

      const notes = await queryClient.fetchQuery({
        queryKey: ['notes'],
        queryFn: fetchNotes,
      });
      useNoteStore.getState().setNotes(notes);

      //   const tags = await queryClient.fetchQuery({
      //     queryKey: ['tags'],
      //     queryFn: fetchTags,
      //   });
      //   useTagStore.getState().setTags(tags);
    },
  });
};

export default useDeleteNoteMutation;
