import { TagOption } from '../../tags/types';

type ValidationResult = string | null;

export const validationRules: Record<
  string,
  (value: TagOption[] | string) => ValidationResult
> = {
  noteTitle: (value: TagOption[] | string) => {
    if (!value) return 'Note Title is required.';
    return null;
  },
  noteTags: (value: TagOption[] | string) => {
    if (value.length == 0) return 'Note Tags are required.';
    return null;
  },
  noteContent: (value: TagOption[] | string) => {
    if (!value) return 'Note Content is required.';
    return null;
  },
};
