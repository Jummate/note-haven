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

export interface AuthResponseData {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    username: string;
  };
}

export interface SignupResponseData {
  message: string;
  user: {
    id: string;
    email: string;
  };
}

export interface ResetPasswordResponseData {
  message: string;
}