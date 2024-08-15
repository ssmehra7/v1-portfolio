import { create } from 'zustand'

interface Props {
  active: string;
  setActive: (newActive: string) => void;
}

export const useActiveSection = create<Props>((set) => ({
  active: "home",
  setActive: (newActive: string) => set(() => ({ active: newActive })),
}));
