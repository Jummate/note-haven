import { create } from 'zustand';

interface HeaderStore {
  headerText: string;
  setHeaderText: (text: string) => void;
}

export const useHeaderStore = create<HeaderStore>(set => ({
  headerText: 'All Notes',
  setHeaderText: text => set({ headerText: text }),
}));
