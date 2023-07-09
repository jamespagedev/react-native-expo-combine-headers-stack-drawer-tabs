import { create } from "zustand";
import { useSettingsStore } from "./Settings";
import { useViewerStore } from "./Viewer";

interface LoadingStore {
  isLoadingApp: boolean;
  initializeAppOnStart: () => Promise<void>;
}

export const useLoadingStore = create<LoadingStore>((set, get) => ({
  isLoadingApp: true,
  initializeAppOnStart: async () => {
    try {
      await useViewerStore.getState().silentLogin();
      await useSettingsStore.getState().initializeSettingsFromStorage();
      set((state) => ({ ...state, isLoadingApp: false }));
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
}));
