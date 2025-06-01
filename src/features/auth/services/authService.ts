import { NavigateFunction } from 'react-router-dom';

import apiClient from '../../../shared/services/apiClient';
import { convertToSnakeCase } from '../../../shared/utils/conversion';
import { notify } from '../../../shared/services/toastService';
import {
  ApiResponse,
  AuthResponseData,
  ResetPasswordResponseData,
  SignupResponseData,
} from '../types';
import { apiCall } from '../utils/apiHelpers';
import { DASHBOARD_URL } from '../../../shared/constants/urls';
import {
  API_FORGOT_PASSWORD_URL,
  API_LOGIN_URL,
  API_LOGOUT_URL,
  API_RESET_PASSWORD_URL,
  API_SIGNUP_URL,
  LOGIN_URL,
} from '../constants/urls';

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
    notify({
      message: 'You are now logged in',
      action: () => navigate(DASHBOARD_URL, { replace: true }),
    });
  }
  return result;

  // try {
  //   const response = await apiClient.post<Record<string, string>>(
  //     "/api/auth/login/",
  //     convertToSnakeCase(data)
  //   );
  //   if (response?.status !== 200) {
  //     notify({
  //       type: "error",
  //       message: response.data.detail,
  //     });
  //     return {
  //       success: false,
  //       error: response.data.detail || "Failed to log in.",
  //     };
  //   }
  //   notify({
  //     message: "You are now logged in",
  //     action: () => navigate("/dashboard", { replace: true }),
  //   });
  //   return { success: true, data: response.data };
  //   // if (response.statusText == "ok") {
  //   //   console.log("success");
  //   // }
  // } catch (error: any) {
  //   console.error("Login error => ", error);
  //   const errorMessage =
  //     error?.response?.data?.detail ||
  //     "An unexpected error occurred during login.";
  //   notify({ type: "error", message: errorMessage });
  //   return {
  //     success: false,
  //     error: errorMessage || "Failed to login user.",
  //   };
  // }
  //   return response.data;
};

export const logout = async (
  navigate: NavigateFunction,
): Promise<ApiResponse<null>> => {
  return apiCall(async () => {
    await apiClient.post(API_LOGOUT_URL, {}, { withCredentials: true });
    navigate(LOGIN_URL, { replace: true });
    return { data: null }; // match the return type expected by apiCall
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

  // try {
  //   const response = await apiClient.post(
  //     "/api/auth/forgot-password/",
  //     convertToSnakeCase(data)
  //   );
  //   callback();
  //   return { success: true, data: response.data };
  // } catch (error: any) {
  //   console.error("Error generating a reset link:", error);
  //   const errorMessage =
  //     error?.response?.data?.detail ||
  //     "An unexpected error occurred generating a reset link.";
  //   notify({ type: "error", message: errorMessage });

  //   return {
  //     success: false,
  //     error: errorMessage || "Failed to generate a reset link",
  //   };
  // }
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

  //   const { token } = data;
  //   if (!token) return notify({ type: "error", message: "Missing token" });
  //   const response = await apiClient.post(
  //     `/api/auth/reset-password/`,
  //     convertToSnakeCase(data)
  //   );
  //   notify({
  //     message:
  //       "Your password has been successfully reset. You can now log in with your new credentials",
  //     action: () => navigate("/login", { replace: true }),
  //   });
  //   return { success: true, data: response.data };
  // } catch (error: any) {
  //   console.error("Error resetting password:", error);
  //   const errorMessage =
  //     error?.response?.data?.detail ||
  //     "An unexpected error occurred resetting password.";
  //   notify({ type: "error", message: errorMessage });

  //   return {
  //     success: false,
  //     error: errorMessage || "Failed to reset password",
  //   };
  // }
};
