// import { NavigateFunction } from 'react-router-dom';
import apiClient from '../../../shared/services/apiClient';
import { apiCall } from '../../../shared/utils/apiHelpers';
import { CreateNoteResponseData } from '../types';
import { API_NOTE_VIEW_URL } from '../constants/urls';
import { convertToSnakeCase } from '../../../shared/utils/conversion';
import { notify } from '../../../shared/services/toastService';
// import { TagType } from '../../tags/types';
import { Option } from '../pages/CreateNotePage';

export type CreateNoteDTO = {
  title: string;
  content: string;
  tags: Option[];
};

export const createNote = async (
  data: CreateNoteDTO,
  //   navigate: NavigateFunction,
) => {
  const result = await apiCall<CreateNoteResponseData>(
    () => apiClient.post(API_NOTE_VIEW_URL, convertToSnakeCase(data)),
    'Failed to create user.',
  );

  if (result.success) {
    notify({
      message: 'Note successfully created',
    });
  }
  return result;
};
