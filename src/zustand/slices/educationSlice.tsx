import { EducationType } from "@/lib/schemaValidations";
import { StateCreator } from "zustand";

export interface EducationState {
  education: EducationType[];
  updateEducationData: (data: EducationType[]) => void;
}

export const educationSlice: StateCreator<EducationState> = (set) => ({
  education: DefaultState,
  updateEducationData: (data) =>
    set((state) => ({
      ...state,
      education: data,
    })),
});

const DefaultState = [
  {
    school: "Shri Guru Ram Rai University",
    field: "Bachelors of Computer Applications",
    graduation: "June 2020 - July 2024",
    location: "Dehradun,India",
    achievement: " Got 8.12 in my last acadameic session",
  },
  {
    school: "xyz school",
    field: "12th",
    graduation: "June 2020 - July 2024",
    location: "Dehradun,India",
    achievement: " Got 80% in my last acadameic session",
  },
];
