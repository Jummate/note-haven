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
