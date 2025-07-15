import { create } from 'zustand';
import { TagType } from '../types';

interface TagState {
  tags: TagType[];
  tagMap: Map<string | number, TagType>;
  setTags: (tags: TagType[]) => void;
  getTagById: (id: string | number) => TagType | undefined;
}

export const useTagStore = create<TagState>((set, get) => ({
  tags: [],
  tagMap: new Map(),

  setTags: (tags: TagType[]) => {
    set({
      tags,
      tagMap: new Map(tags.map(tag => [tag.id, tag])),
    });
  },

  getTagById: (id: string | number) => get().tagMap.get(id),
}));
