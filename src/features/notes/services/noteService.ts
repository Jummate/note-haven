import { apiCall } from '../../../shared/utils/apiHelpers';
import { CreateNoteResponseData, NoteProps } from '../types';
import { API_NOTE_VIEW_URL } from '../constants/urls';
import {
  convertToCamelCase,
  convertToSnakeCase,
} from '../../../shared/utils/conversion';
import { notify } from '../../../shared/services/toastService';

import { TagOption } from '../../tags/types';
import axiosAuth from '../../../shared/services/authenticatedApiClient';

export type CreateNoteDTO = {
  title: string;
  content: string;
  tags: TagOption[];
};

export const createNote = async (data: CreateNoteDTO) => {
  const result = await apiCall<CreateNoteResponseData>(
    () => axiosAuth.post(API_NOTE_VIEW_URL, convertToSnakeCase(data)),
    'Failed to create note.',
  );

  if (result.success) {
    notify({
      message: result.data.message,
    });
  }
  return result;
};

export const fetchNotes = async (): Promise<NoteProps[]> => {
  const result = await apiCall<NoteProps[]>(
    () => axiosAuth.get(API_NOTE_VIEW_URL),
    'Failed to fetch notes.',
  );

  if (!result.success) {
    throw new Error(result.error);
  }

  return convertToCamelCase(result.data) as NoteProps[];
};
