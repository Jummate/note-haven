import { AxiosError } from 'axios';
import { notify } from '../services/toastService';
import { ApiResponse, ErrorResponseData } from '../types';

function isAxiosError(error: unknown): error is AxiosError<ErrorResponseData> {
  return (error as AxiosError)?.isAxiosError === true;
}

// Define user-friendly messages for backend codes
const codeMessages: Record<string, string> = {
  INVALID_CREDENTIALS: 'Email or password is incorrect',
  ACCOUNT_LOCKED: 'Too many attempts. Try again later',
  TOKEN_EXPIRED: 'Your session has expired. Please log in again.',
  TOKEN_INVALID: 'Your session has expired. Please log in again.',
  TOKEN_MISSING: 'Your session has expired. Please log in again.',
  VALIDATION_ERROR: 'Please fix the highlighted fields',
  UNAUTHORIZED: 'You need to sign in',
  FORBIDDEN: 'You do not have permission to access this resource',
  SERVER_ERROR: 'Something went wrong',
  NOT_FOUND: 'Requested resource not found',
  NO_REFRESH_TOKEN: 'No refresh token provided',
  INVALID_RESET_TOKEN: 'Password reset token is invalid or expired',
  UNKNOWN_ERROR: 'An unexpected error occurred. Please try again',
};

export function handleApiError(
  error: unknown,
  fallbackMessage = 'Something went wrong. Please try again.',
): ApiResponse<never> {
  let userMessage = fallbackMessage;

  if (isAxiosError(error)) {
    const status = error.response?.status;
    const data = error.response?.data as {
      code?: string;
      message?: string;
      detail?: string;
    };

    if (data?.code && codeMessages[data.code]) {
      userMessage = codeMessages[data.code];
    } else if (data?.message) {
      userMessage = data.message;
    } else if (status) {
      // Fallback based on HTTP status
      if (status === 401) userMessage = 'You need to log in again.';
      if (status === 403)
        userMessage = 'You are not allowed to perform this action.';
      if (status === 429)
        userMessage = 'Too many attempts. Please try again later.';
      if (status >= 500)
        userMessage = 'Our server is having issues. Please try again soon.';
    }
  }

  notify({ type: 'error', message: userMessage });
  return { success: false, error: userMessage };
}

export async function apiCall<T>(
  fn: () => Promise<{ data: T }>,
  fallbackMessage: string,
): Promise<ApiResponse<T>> {
  try {
    const response = await fn();
    return { success: true, data: response.data };
  } catch (error) {
    return handleApiError(error, fallbackMessage);
  }
}
