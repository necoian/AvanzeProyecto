import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProgressState = {
  closed: Record<string, boolean>;
  notes: Record<string, string>;
  toggle: (id: string) => void;
  setClosed: (id: string, value: boolean) => void;
  setNote: (id: string, value: string) => void;
  reset: () => void;
  closeMany: (ids: string[]) => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      closed: {},
      notes: {},
      toggle: (id) =>
        set((s) => ({ closed: { ...s.closed, [id]: !s.closed[id] } })),
      setClosed: (id, value) =>
        set((s) => ({ closed: { ...s.closed, [id]: value } })),
      setNote: (id, value) =>
        set((s) => ({ notes: { ...s.notes, [id]: value } })),
      reset: () => set({ closed: {}, notes: {} }),
      closeMany: (ids) =>
        set((s) => {
          const next = { ...s.closed };
          for (const id of ids) next[id] = true;
          return { closed: next };
        }),
    }),
    { name: "reservas-temporales-checklist-v1" },
  ),
);
