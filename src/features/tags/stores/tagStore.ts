import { TagType } from '../types';

export const tags: TagType[] = [
  { id: 'tag1', name: 'Dev', userId: 'user1' },
  { id: 'tag2', name: 'React', userId: 'user1' },
  { id: 'tag3', name: 'Personal', userId: 'user2' },
];

export const getAllTags = (userId: string | number = 'user1') => {
  return tags.filter(tag => tag.userId === userId);
};
