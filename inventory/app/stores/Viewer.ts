import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import { fakeApiGetCurrentUser } from "@app/apis";
import { VIEWER_TOKEN } from "@app/utils";
import { ApiResponseGetCurrentUser, ViewerInfo } from "@app/types";

interface ViewerStore {
  isViewerAuthenticated: boolean;
  viewerInfo: ViewerInfo | null;
  setViewerInfo: (token: string, newViewerInfo: ViewerInfo) => Promise<void>;
  silentLogin: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useViewerStore = create<ViewerStore>((set, get) => ({
  isViewerAuthenticated: false,
  viewerInfo: null,
  setViewerInfo: async (token: string, newViewerInfo: ViewerInfo) => {
    try {
      await SecureStore.setItemAsync(VIEWER_TOKEN, token);
      set({ isViewerAuthenticated: true, viewerInfo: newViewerInfo });
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  silentLogin: async () => {
    try {
      const token = await SecureStore.getItemAsync(VIEWER_TOKEN);
      if (!token) return;
      const responseCurrentUser: ApiResponseGetCurrentUser | null =
        await fakeApiGetCurrentUser(token);
      if (responseCurrentUser === null) throw new Error("Session Ended");
      set({
        isViewerAuthenticated: true,
        viewerInfo: {
          id: responseCurrentUser.id,
          displayName: responseCurrentUser.displayName,
          firstName: responseCurrentUser.firstName,
          lastName: responseCurrentUser.lastName,
          email: responseCurrentUser.email,
        },
      });
    } catch (error: any) {
      // ToDo: create toast session ended message
      set({ isViewerAuthenticated: false, viewerInfo: null });
      throw new Error(error.message);
    }
  },
  logout: async () => {
    try {
      await SecureStore.deleteItemAsync(VIEWER_TOKEN);
      set({ isViewerAuthenticated: false, viewerInfo: null });
    } catch (error: any) {
      set({ isViewerAuthenticated: false, viewerInfo: null });
      throw new Error(error.message);
    }
  },
}));
