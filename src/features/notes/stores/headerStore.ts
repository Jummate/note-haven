import { create } from "zustand";

interface HeaderStore {
  headerText: string;
  setHeaderText: (text: string) => void;
  //   isMobile: boolean;
  //   checkIfMobile: () => void;
}

export const useHeaderStore = create<HeaderStore>((set) => ({
  headerText: "All Notes", // Default header text
  setHeaderText: (text) => set({ headerText: text }),

  //   isMobile: window.innerWidth <= 768, // Mobile detection on load
  //   checkIfMobile: () => {
  //     const isMobile = window.innerWidth <= 768;
  //     set({ isMobile });
  //   },
}));

// // Listen for window resize events to update the `isMobile` state
// if (typeof window !== "undefined") {
//   window.addEventListener("resize", () => {
//     useHeaderStore.getState().checkIfMobile();
//   });
// }
