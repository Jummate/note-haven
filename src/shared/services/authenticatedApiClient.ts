import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import useAuthStore from '../../features/auth/stores/authStore';
import { notify } from './toastService';
import { API_REFRESH_URL } from '../../features/auth/constants/urls';
import { BASE_URL } from '../constants/urls';

const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosAuth.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().token;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

axiosAuth.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (!error.response) return Promise.reject(error);

    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response.status === 401) {
      notify({
        message:
          (error.response.data as { message?: string })?.message ??
          'Unauthorized',
        type: 'error',
      });
      return Promise.reject(error);
    }

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshResponse = await axiosAuth.get<{ accessToken: string }>(
          API_REFRESH_URL,
        );
        const newToken = refreshResponse.data.accessToken;
        useAuthStore.getState().setToken(newToken);
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
        }
        return axiosAuth(originalRequest);
      } catch (refreshError) {
        useAuthStore.getState().logout();
        console.error('Token refresh failed:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosAuth;
