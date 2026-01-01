// authenticatedApiClient.ts
import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import useAuthStore from '../../features/auth/stores/authStore';
import { API_REFRESH_URL } from '../../features/auth/constants/urls';
import { BASE_URL } from '../constants/urls';

const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, // allow HttpOnly cookie
});

type RetriableRequest = InternalAxiosRequestConfig & { _retry?: boolean };

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: AxiosResponse | PromiseLike<AxiosResponse>) => void;
  reject: (reason?: unknown) => void;
  originalRequest: RetriableRequest;
}> = [];

// Process queued requests
const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach(item => {
    if (token) {
      if (item.originalRequest.headers) {
        item.originalRequest.headers.Authorization = `Bearer ${token}`;
      }
      item.resolve(axiosAuth(item.originalRequest));
    } else {
      item.reject(error);
    }
  });
  failedQueue = [];
};

// Request interceptor: attach access token
axiosAuth.interceptors.request.use(
  config => {
    const token = useAuthStore.getState().token;
    if (token && config.url !== API_REFRESH_URL && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// Response interceptor: handle 401 → refresh token
axiosAuth.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    if (!error.response) return Promise.reject(error);

    const originalRequest = error.config as RetriableRequest;

    if (
      error.response.status === 401 &&
      originalRequest.url !== API_REFRESH_URL
    ) {
      if (isRefreshing) {
        return new Promise<AxiosResponse>((resolve, reject) => {
          failedQueue.push({ resolve, reject, originalRequest });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // const refreshResponse = await axiosAuth.get<{ accessToken: string }>(API_REFRESH_URL);
        // const newToken = refreshResponse.data.accessToken;
        // useAuthStore.getState().setToken(newToken);

        const { data } = await axiosAuth.get<{
          accessToken: string;
          expiresIn: number;
        }>(API_REFRESH_URL);
        const newToken = data.accessToken;
        useAuthStore.getState().setToken(newToken, data.expiresIn);

        processQueue(null, newToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
        }

        return axiosAuth(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        useAuthStore.getState().logout();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default axiosAuth;
