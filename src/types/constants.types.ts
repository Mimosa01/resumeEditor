export type SectionEnum = 'exp' | 'skills' | 'education' | 'about';

export type SectionType = {
  id: number;
  name: string;
  type: SectionEnum;
}

export type AboutType = {
  surname: string;
  name: string;
  lastname: string;
  date: string;
  country: string;
  city: string;
};

export type ExperienceType = {
  id: number;
  order: number;
  company: string;
  job: string;
  start: string;
  end?: string;
  isCurrent: boolean;
  description: string;
};

export type EducationType = {
  id: number;
  order: number;
  university: string;
  speciality: string;
  start: string;
  end: string;
};