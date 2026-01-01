import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNote, CreateNoteDTO } from '../services/noteService';
// import { useNoteStore } from '../stores/noteStore';
// import { fetchTags } from '../../tags/services/tagService';
// import { useTagStore } from '../../tags/stores/tagStore';
// import { notify } from '../../../shared/services/toastService';

// const useCreateNoteMutation = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (data: CreateNoteDTO) => createNote(data),
//     onSuccess: async () => {
//       const notes = await queryClient.fetchQuery({
//         queryKey: ['notes'],
//         queryFn: fetchNotes,
//       });
//       useNoteStore.getState().setNotes(notes);

//       const tags = await queryClient.fetchQuery({
//         queryKey: ['tags'],
//         queryFn: fetchTags,
//       });
//       useTagStore.getState().setTags(tags);
//     },
//   });
// };

const useCreateNoteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateNoteDTO) => createNote(data),
    onSuccess: () => {
      // This automatically triggers refetch of these queries
      // and useSyncNotes/useSyncTags will update the stores
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      queryClient.invalidateQueries({ queryKey: ['tags'] });
    },
  });
};

export default useCreateNoteMutation;
