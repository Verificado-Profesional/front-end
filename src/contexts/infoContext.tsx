import { create } from 'zustand';

type Info = {
  content: string;
  link: string;
};

type InfoContext = {
  info: Info;
  setInfo: (state: Info) => void;
};

export const useInfoContext = create<InfoContext>((set) => ({
  info: {
    content: '',
    link: '',
  },
  setInfo: (state) =>
    set({ info: { content: state.content, link: state.link } }),
}));
