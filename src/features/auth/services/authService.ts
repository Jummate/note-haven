import { NavigateFunction } from 'react-router-dom';

import apiClient from '../../../shared/services/apiClient';
import { convertToSnakeCase } from '../../../shared/utils/conversion';
import { notify } from '../../../shared/services/toastService';
import {
  AuthResponseData,
  ResetPasswordResponseData,
  SignupResponseData,
} from '../types';
import { ApiResponse } from '../../../shared/types';
import { apiCall } from '../../../shared/utils/apiHelpers';
import {
  DASHBOARD_URL,
  LANDING_PAGE_URL,
} from '../../../shared/constants/urls';
import {
  API_FORGOT_PASSWORD_URL,
  API_LOGIN_URL,
  API_LOGOUT_URL,
  API_RESET_PASSWORD_URL,
  API_SIGNUP_URL,
  LOGIN_URL,
} from '../constants/urls';
import useAuthStore from '../stores/authStore';

export const createUser = async (
  data: Record<string, string>,
  navigate: NavigateFunction,
): Promise<ApiResponse<SignupResponseData>> => {
  const result = await apiCall<SignupResponseData>(
    () => apiClient.post(API_SIGNUP_URL, convertToSnakeCase(data)),
    'Failed to create user.',
  );

  if (result.success) {
    notify({
      message: 'Account successfully created',
      action: () => navigate(DASHBOARD_URL, { replace: true }),
    });
  }
  return result;
};

export const login = async (
  data: Record<string, string>,
  navigate: NavigateFunction,
): Promise<ApiResponse<AuthResponseData>> => {
  const result = await apiCall<AuthResponseData>(
    () => apiClient.post(API_LOGIN_URL, convertToSnakeCase(data)),
    'Failed to log in.',
  );
  if (result.success) {
    const { accessToken } = result.data;
    useAuthStore.getState().setToken(accessToken);

    notify({
      message: 'You are now logged in',
      action: () => navigate(DASHBOARD_URL, { replace: true }),
    });
  }
  return result;
};

export const logout = async (
  navigate: NavigateFunction,
): Promise<ApiResponse<null>> => {
  return apiCall(async () => {
    await apiClient.post(API_LOGOUT_URL, {}, { withCredentials: true });
    useAuthStore.getState().setToken('');
    notify({
      message: 'Logged out succesfully',
      action: () => navigate(LANDING_PAGE_URL, { replace: true }),
    });
    return { data: null };
  }, 'Failed to log out.');
};

export const forgotPassword = async (
  data: Record<string, string>,
  callback: () => void,
) => {
  const result = await apiCall(
    () => apiClient.post(API_FORGOT_PASSWORD_URL, convertToSnakeCase(data)),
    'Failed to generate a reset link.',
  );

  if (result.success) {
    callback();
  }

  return result;
};
export const resetPassword = async (
  data: Record<string, string>,
  navigate: NavigateFunction,
) => {
  if (!data.token) {
    notify({ type: 'error', message: 'Missing token' });
    return { success: false, error: 'Missing token' };
  }
  const result = await apiCall<ResetPasswordResponseData>(
    () => apiClient.post(API_RESET_PASSWORD_URL, convertToSnakeCase(data)),
    'Failed to reset password.',
  );

  if (result.success) {
    notify({
      message:
        'Your password has been successfully reset. You can now log in with your new credentials',
      action: () => navigate(LOGIN_URL, { replace: true }),
    });
  }

  return result;
};
