import { create } from 'zustand';

interface AuthState {
  token: string;
  setToken: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>(set => ({
  token: '',
  setToken: token => set({ token }),
  logout: () => set({ token: '' }),
}));

export default useAuthStore;
