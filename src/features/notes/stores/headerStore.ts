import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface HeaderStore {
  headerText: string;
  setHeaderText: (text: string) => void;
}

export const useHeaderStore = create<HeaderStore>()(
  persist(
    set => ({
      headerText: 'All Notes',
      setHeaderText: text => set({ headerText: text }),
    }),
    {
      name: 'header-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
