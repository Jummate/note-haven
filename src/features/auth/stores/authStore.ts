// authStore.ts
import { create } from 'zustand';

const authChannel = new BroadcastChannel('auth');

interface AuthState {
  isInitialized: boolean;
  token: string | null;
  tokenExpiry: number | null;
  isLoggingOut: boolean;
  setToken: (token: string | null, expiresIn?: number) => void;
  logout: () => void;
  clearAuth: () => void;
  setLoggingOut: (value: boolean) => void;
}

const useAuthStore = create<AuthState>(set => ({
  token: null,
  tokenExpiry: null,
  isInitialized: false,
  isLoggingOut: false,

  setToken: (token, expiresIn = 900) =>
    set({
      token,
      tokenExpiry: token ? Date.now() + expiresIn * 1000 : null,
    }),

  setInitialized: (initialized: boolean) => set({ isInitialized: initialized }),
  setLoggingOut: (value: boolean) => set({ isLoggingOut: value }),

  clearAuth: () => {
    set({ token: null, tokenExpiry: null });
  },

  logout: () => {
    set({ token: null, tokenExpiry: null });
    authChannel.postMessage('logout');
  },
}));

authChannel.onmessage = ev => {
  if (ev.data === 'logout') {
    useAuthStore.getState().clearAuth();
  }
};

export default useAuthStore;
