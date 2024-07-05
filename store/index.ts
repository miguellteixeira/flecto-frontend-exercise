import create from 'zustand';
import { Planet } from '@/types';

interface GlobalState {
  page: number;
  setPage: (page: number) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  openModal: boolean;
  setOpenModal: (isOpen: boolean) => void;
  selectedPlanet: Planet | null;
  setSelectedPlanet: (planet: Planet) => void;
}

export const useStore = create<GlobalState>()((set) => ({
  page: 1,
  setPage: (page) => set({ page: page }),
  inputValue: '',
  setInputValue: (value) => set({ inputValue: value }),
  openModal: false,
  setOpenModal: (isOpen) => set({ openModal: isOpen }),
  selectedPlanet: null,
  setSelectedPlanet: (planet) => set({ selectedPlanet: planet }),
}));
