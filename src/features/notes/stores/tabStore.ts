import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"; // Correctly import the persist middleware
import { TabKey } from "../constants/tabs";

interface TabStore {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export const useTabStore = create<TabStore>()(
  persist(
    (set) => ({
      activeTab: "notes", // Default tab value
      setActiveTab: (tab) => set({ activeTab: tab }),
    }),
    {
      name: "tab-store", // Unique name for persistence
      storage: createJSONStorage(() => sessionStorage), // Default is localStorage, you can change to sessionStorage if needed
    }
  )
);
