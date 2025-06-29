import { create } from "zustand";
import type { SectionType, SectionEnum } from "../types/constants.types";

type FormsStoreType = {
  forms: SectionType[];
  addFormByType: (type: SectionEnum, name: string) => void;
  deleteForm: (id: number) => void;
  moveForm: (dragIndex: number, hoverIndex: number) => void;
  loadFromStorage: () => void;
};

const LOCAL_STORAGE_KEY = "resume-forms";
const singleAllowedTypes: SectionEnum[] = ["skills"];

function createNewForm(type: SectionEnum, name: string): SectionType {
  return {
    id: Date.now() + Math.random(),
    name,
    type,
  };
}

const useFormsStore = create<FormsStoreType>((set, get) => ({
  forms: [],

  addFormByType: (type, name) => {
    const { forms } = get();

    if (
      singleAllowedTypes.includes(type) &&
      forms.some((form) => form.type === type)
    ) {
      return;
    }

    const newForm = createNewForm(type, name);
    const updated = [...forms, newForm];
    set({ forms: updated });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  },

  deleteForm: (id) => {
    const updated = get().forms.filter((form) => form.id !== id);
    set({ forms: updated });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  },

  moveForm: (dragIndex, hoverIndex) => {
    const updated = [...get().forms];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(hoverIndex, 0, moved);
    set({ forms: updated });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  },

  loadFromStorage: () => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        set({ forms: parsed });
      } catch (e) {
        console.error("Ошибка при загрузке forms из localStorage", e);
      }
    }
  },
}));

export default useFormsStore;
