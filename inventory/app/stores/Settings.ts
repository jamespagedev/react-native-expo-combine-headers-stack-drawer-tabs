import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import { copyByValue, screenNavigations, VIEWER_SETTINGS } from "@app/utils";
import { Settings } from "@app/types";

interface SettingsStore {
  settings: Settings;
  setSettings: (newSettings: Settings) => Promise<void>;
  initializeSettingsFromStorage: () => Promise<void>;
  clearCacheSettings: () => Promise<void>;
}

export const initialSettings: Settings = {
  isSettingsAccepted: false,
  autoSelectFirstShopOnLoad: true,
  autoDraftOrders: false,
  defaultHomePage: screenNavigations.dashboard,
};

export const useSettingsStore = create<SettingsStore>((set, get) => ({
  settings: copyByValue(initialSettings),
  setSettings: async (newSettings: Settings) => {
    await SecureStore.setItemAsync(
      VIEWER_SETTINGS,
      JSON.stringify(newSettings)
    );
    set({ settings: newSettings });
  },
  initializeSettingsFromStorage: async () => {
    try {
      const settingsFromStorage: string | null = await SecureStore.getItemAsync(
        VIEWER_SETTINGS
      );
      if (settingsFromStorage !== null) {
        set({ settings: JSON.parse(settingsFromStorage) });
      }
    } catch (error: any) {
      // ToDo: create toast session ended message
      throw new Error(error.message);
    }
  },
  clearCacheSettings: async () => {
    await SecureStore.setItemAsync(
      VIEWER_SETTINGS,
      JSON.stringify(initialSettings)
    );
    set({ settings: copyByValue(initialSettings) });
  },
}));
