import { create } from "zustand";
import { saveToLocalStorage } from "../lib/safeToLocalStorage";
import type { AboutType, ExperienceType, EducationType } from "../types/constants.types";

type FormsStoreType = {
  about: AboutType;
  experience: ExperienceType[];
  education: EducationType[];
  skills: string[];

  orderCounter: number;
  getNextOrder: () => number;

  setAbout: (data: Partial<AboutType>) => void;

  addExperience: (data: ExperienceType) => void;
  updateExperience: (id: number, data: Partial<ExperienceType>) => void;
  deleteExperience: (id: number) => void;

  setSkills: (skills: string[]) => void;

  addEducation: (data: EducationType) => void;
  updateEducation: (id: number, data: Partial<EducationType>) => void;
  deleteEducation: (id: number) => void;
};

const LOCAL_STORAGE_KEY = "resume-data";

const useDataStore = create<FormsStoreType>((set, get) => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  let initialState = {
    about: {
      surname: "",
      name: "",
      lastname: "",
      date: "",
      country: "",
      city: "",
    },
    experience: [],
    education: [],
    skills: [],
    orderCounter: 0,
  };

  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      initialState = { ...initialState, ...parsed };
    } catch (e) {
      console.error("Ошибка при парсинге localStorage:", e);
    }
  }

  const saveState = () => {
    const { about, experience, education, skills, orderCounter } = get();
    saveToLocalStorage(LOCAL_STORAGE_KEY, {
      about,
      experience,
      education,
      skills,
      orderCounter,
    });
  };

  return {
    ...initialState,

    getNextOrder: () => {
      const next = get().orderCounter + 1;
      set({ orderCounter: next });
      saveState();
      return next;
    },

    setAbout: (data) => {
      set((state) => ({
        about: { ...state.about, ...data },
      }));
      saveState();
    },

    addExperience: (exp) => {
      set((state) => ({
        experience: [...state.experience, exp],
      }));
      saveState();
    },

    updateExperience: (id, data) => {
      set((state) => ({
        experience: state.experience.map((e) =>
          e.id === id ? { ...e, ...data } : e
        ),
      }));
      saveState();
    },

    deleteExperience: (id) => {
      set((state) => ({
        experience: state.experience.filter((e) => e.id !== id),
      }));
      saveState();
    },

    setSkills: (skills) => {
      set(() => ({ skills }));
      saveState();
    },

    addEducation: (edu) => {
      set((state) => ({
        education: [...state.education, edu],
      }));
      saveState();
    },

    updateEducation: (id, data) => {
      set((state) => ({
        education: state.education.map((e) =>
          e.id === id ? { ...e, ...data } : e
        ),
      }));
      saveState();
    },

    deleteEducation: (id) => {
      set((state) => ({
        education: state.education.filter((e) => e.id !== id),
      }));
      saveState();
    },
  };
});

export default useDataStore;
