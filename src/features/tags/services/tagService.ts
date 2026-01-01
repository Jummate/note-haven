import axiosAuth from '../../../shared/services/authenticatedApiClient';
import { apiCall } from '../../../shared/utils/apiHelpers';
import { convertToCamelCase } from '../../../shared/utils/conversion';
import { API_TAGS_URL } from '../constants/urls';
import { TagType } from '../types';

export const fetchTags = async (): Promise<TagType[]> => {
  const result = await apiCall<TagType[]>(
    () => axiosAuth.get(API_TAGS_URL),
    'Failed to fetch tags.', // fallback message in case API does not return code/message
  );

  // No need to throw raw errors anymore; handleApiError already notified the user
  if (!result.success) {
    return []; // return empty array if fetching fails
  }

  return convertToCamelCase(result.data) as TagType[];
};
