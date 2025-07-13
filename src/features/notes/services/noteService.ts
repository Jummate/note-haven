// import { NavigateFunction } from 'react-router-dom';
import { apiCall } from '../../../shared/utils/apiHelpers';
import { CreateNoteResponseData } from '../types';
import { API_NOTE_VIEW_URL } from '../constants/urls';
import { convertToSnakeCase } from '../../../shared/utils/conversion';
import { notify } from '../../../shared/services/toastService';
// import { TagType } from '../../tags/types';

import { TagOption } from '../../tags/types';
import axiosAuth from '../../../shared/services/authenticatedApiClient';

export type CreateNoteDTO = {
  title: string;
  content: string;
  tags: TagOption[];
};

export const createNote = async (
  data: CreateNoteDTO,
  //   navigate: NavigateFunction,
) => {
  const result = await apiCall<CreateNoteResponseData>(
    () => axiosAuth.post(API_NOTE_VIEW_URL, convertToSnakeCase(data)),
    'Failed to create note.',
  );

  console.log('resss', result);

  if (result.success) {
    notify({
      message: result.data.message,
    });
  }
  return result;
};
