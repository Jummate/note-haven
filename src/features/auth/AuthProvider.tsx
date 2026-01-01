// AuthProvider.tsx
import { ReactNode, useEffect, useState } from 'react';
import useAuthStore from './stores/authStore';
import axiosAuth from '../../shared/services/authenticatedApiClient';
import { API_LOGOUT_URL, API_REFRESH_URL } from './constants/urls';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const setToken = useAuthStore(state => state.setToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to refresh token on app start
    axiosAuth
      .get(API_REFRESH_URL) // replace with your refresh endpoint
      .then(res => {
        setToken(res.data.accessToken);
      })
      .catch(async () => {
        // Clear token in state
        setToken(null);
        // Optionally call logout endpoint to clear httpOnly cookie
        try {
          await axiosAuth.post(API_LOGOUT_URL);
        } catch {
          // Ignore logout errors on app init
        }
      })
      .finally(() => setLoading(false));
  }, [setToken]);

  useEffect(() => {
    if (!useAuthStore.getState().token) return;

    const interval = setInterval(async () => {
      const { tokenExpiry } = useAuthStore.getState();

      // Refresh 1 minute before expiry
      if (tokenExpiry && Date.now() > tokenExpiry - 60000) {
        try {
          const res = await axiosAuth.get(API_REFRESH_URL);
          setToken(res.data.accessToken, res.data.expiresIn);
        } catch {
          // If refresh fails, axios interceptor will catch it
        }
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [setToken]);

  if (loading) {
    // Show a spinner or blank screen while checking token
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};
