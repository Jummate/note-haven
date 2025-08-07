import { create } from 'zustand';

interface ModalStore {
  type: string;
  openModal: boolean;
  setOpenModal: (val: boolean) => void;
  setType: (val: string) => void;
  fn: React.MouseEventHandler<HTMLButtonElement> | undefined;
  setFn: (val: React.MouseEventHandler<HTMLButtonElement> | undefined) => void;
  message: string;
  setMessage: (val: string) => void;
}

export const useModalStore = create<ModalStore>(set => ({
  openModal: false,
  setOpenModal: val => set({ openModal: val }),
  type: '',
  setType: val => set({ type: val }),
  fn: undefined,
  setFn: val => set({ fn: val }),
  message: '',
  setMessage: val => set({ message: val }),
}));
