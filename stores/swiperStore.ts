import { create } from 'zustand';

interface SwiperState {
  isReachEnd: boolean;
  isActiveIndex: boolean;
}

interface SwiperAction {
  setReachEnd: (val?: boolean) => void;
  setActiveIndex: (val?: boolean) => void;
}

const initialState: SwiperState = {
  isReachEnd: true,
  isActiveIndex: false,
};

export const useSwiperStore = create<SwiperState & SwiperAction>((set) => ({
  ...initialState,

  setReachEnd: (val) => set(() => ({ isReachEnd: val })),

  setActiveIndex: (val) => set(() => ({ isActiveIndex: val })),
}));
