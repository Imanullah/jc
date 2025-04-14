import { create } from 'zustand';

interface FormState {
  fname: string;
  email: string;
}

interface FormAction {
  setFname: (val?: string) => void;
  setEmail: (val?: string) => void;
}

const initialState: FormState = {
  fname: '',
  email: '',
};

export const useFormStore = create<FormState & FormAction>((set) => ({
  ...initialState,

  setFname: (val) => set(() => ({ fname: val })),

  setEmail: (val) => set(() => ({ email: val })),
}));
