export interface SuccessResponse<T> {
  success: true;
  data: T;
}

export interface ErrorResponse {
  success: false;
  error: string;
}

export interface ErrorResponseData {
  detail?: string;
  message?: string;
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
