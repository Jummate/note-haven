// useSyncTags.ts
import { useEffect } from 'react';
import { useTagsQuery } from './useTagsQuery';
import { useTagStore } from '../stores/tagStore';

export const useSyncTags = () => {
  const { data: tags, isLoading, isError } = useTagsQuery();
  const setTags = useTagStore(state => state.setTags);

  useEffect(() => {
    if (tags) {
      setTags(tags);
    }
  }, [tags, setTags]);

  return { tags, isLoading, isError };
};
