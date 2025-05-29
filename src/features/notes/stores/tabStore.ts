import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"; // Correctly import the persist middleware
import { SettingsLabel } from "../../settings/constants/labels";

// import { FooterTabKey } from "../../../layout/constants/tabs";
// import { SettingsTabKey } from "../../settings/constants/tabs";

// import { TabKey } from "../constants/tabs";

// interface TabStore {
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
// }

// type TabSection = "footer" | "sidebar" | "settings";

type TabKeysBySection = {
  footer: string;
  sidebar: string;
  settings: string;
};

interface TabStore {
  activeTabs: {
    [K in keyof TabKeysBySection]: TabKeysBySection[K];
  };
  setActiveTab: <T extends keyof TabKeysBySection>(
    section: T,
    tab: TabKeysBySection[T]
  ) => void;
}

export const useTabStore = create<TabStore>()(
  persist(
    (set) => ({
      activeTabs: {
        footer: "home",
        sidebar: "notes",
        settings: SettingsLabel.COLOR_THEME,
      },
      setActiveTab: (section, tab) =>
        set((state) => ({
          activeTabs: { ...state.activeTabs, [section]: tab },
        })),
    }),
    {
      name: "tab-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// export const useTabStore = create<TabStore>()(
//   persist(
//     (set) => ({
//       activeTab: "notes", // Default tab value
//       setActiveTab: (tab) => set({ activeTab: tab }),
//     }),
//     {
//       name: "tab-store", // Unique name for persistence
//       storage: createJSONStorage(() => sessionStorage), // Default is localStorage, you can change to sessionStorage if needed
//     }
//   )
// );
