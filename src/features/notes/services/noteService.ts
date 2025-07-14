// import { NavigateFunction } from 'react-router-dom';
import { apiCall } from '../../../shared/utils/apiHelpers';
import { CreateNoteResponseData, NoteProps } from '../types';
import { API_NOTE_VIEW_URL } from '../constants/urls';
import { convertToSnakeCase } from '../../../shared/utils/conversion';
import { notify } from '../../../shared/services/toastService';
// import { TagType } from '../../tags/types';

import { TagOption } from '../../tags/types';
import axiosAuth from '../../../shared/services/authenticatedApiClient';
// import { BASE_URL } from '../../../shared/constants/urls';
// import axios from 'axios';

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

  if (result.success) {
    notify({
      message: result.data.message,
    });
  }
  return result;
};

// export const fetchNotes = async (): Promise<NoteProps[]> => {
//   const response = await axios.get(
//     'https://21a46d756d3a.ngrok-free.app/api/v1/notes/',
//   );
//   return response.data;
// };

// export const fetchNotes = async (): Promise<NoteProps[]> => {
//   console.log('url', `${BASE_URL}/${API_NOTE_VIEW_URL}`);
//   const result = await apiCall<NoteProps[]>(
//     () => axios.get('https://21a46d756d3a.ngrok-free.app/api/v1/notes/'),
//     'Failed to fetch notes.',
//   );
//   console.log('my my res', result);

//   if (!result.success) {
//     throw new Error(result.error); // this lets React Query know it failed
//   }

//   return result.data;
// };

export const fetchNotes = async (): Promise<NoteProps[]> => {
  const result = await apiCall<NoteProps[]>(
    () => axiosAuth.get(API_NOTE_VIEW_URL),
    'Failed to fetch notes.',
  );

  if (!result.success) {
    throw new Error(result.error); // this lets React Query know it failed
  }

  return result.data;
};
