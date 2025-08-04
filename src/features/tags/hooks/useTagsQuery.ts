import { useQuery } from '@tanstack/react-query';
import { fetchTags } from '../services/tagService';

export const useTagsQuery = () => {
  return useQuery({
    queryKey: ['tags'],
    queryFn: fetchTags,
    staleTime: 1000 * 60 * 5,
    retry: 1,
    // refetchOnWindowFocus: false,
  });
};
