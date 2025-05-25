// src/features/auth/utils/apiHelpers.ts

import { AxiosError } from "axios";

import { notify } from "../../../shared/services/toastService";
import { ApiResponse, ErrorResponseData } from "../types";

export function handleApiError(
  error: unknown,
  fallbackMessage = "An unexpected error occurred."
): ApiResponse<never> {
  const axiosError = error as AxiosError<ErrorResponseData>;
  const detail = axiosError?.response?.data?.detail;
  const message = axiosError?.response?.data?.message;
  const errorMessage = detail || message || fallbackMessage;

  notify({ type: "error", message: errorMessage });

  return {
    success: false,
    error: errorMessage,
  };
}

export async function apiCall<T>(
  fn: () => Promise<{ data: T }>,
  fallbackMessage: string
): Promise<ApiResponse<T>> {
  try {
    const response = await fn();
    return { success: true, data: response.data };
  } catch (error) {
    return handleApiError(error, fallbackMessage);
  }
}
