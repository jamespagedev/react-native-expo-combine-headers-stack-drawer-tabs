import { create } from "zustand";

interface HamburgerStore {
  isHamburgerOpen: boolean;
  toggleHamburger: () => void;
}

export const useHamburgerStore = create<HamburgerStore>((set) => ({
  isHamburgerOpen: false,
  toggleHamburger: () =>
    set((state) => ({ isHamburgerOpen: !state.isHamburgerOpen })),
}));
