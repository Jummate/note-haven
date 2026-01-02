// authStore.ts
import { create } from 'zustand';

const authChannel = new BroadcastChannel('auth');

interface AuthState {
  isInitialized: boolean;
  token: string | null;
  tokenExpiry: number | null;
  setToken: (token: string | null, expiresIn?: number) => void;
  logout: () => void;
  clearAuth: () => void;
}

const useAuthStore = create<AuthState>(set => ({
  token: null,
  tokenExpiry: null,
  isInitialized: false,

  setToken: (token, expiresIn = 900) =>
    set({
      token,
      tokenExpiry: token ? Date.now() + expiresIn * 1000 : null,
    }),

  setInitialized: (initialized: boolean) => set({ isInitialized: initialized }),

  clearAuth: () => {
    set({ token: null, tokenExpiry: null });
  },

  logout: () => {
    set({ token: null, tokenExpiry: null });
    authChannel.postMessage('logout');
  },
}));

authChannel.onmessage = ev => {
  console.log('📡 Received broadcast message:', ev.data); // ← ADD THIS
  if (ev.data === 'logout') {
    useAuthStore.getState().clearAuth();
  }
};

export default useAuthStore;
