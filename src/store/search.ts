import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { SearchLocation } from '../shared/interfaces/location';

interface SearchState {
  selectedLocation: SearchLocation | null;
  setSelectedLocation: (data: SearchLocation) => void;
}

export const useSearchStore = create<SearchState>()(
  devtools(
    // persist(
    (set) => ({
      selectedLocation: null,
      setSelectedLocation: (data) => set(() => ({ selectedLocation: data })),
    }),
    {
      name: 'search-store',
    }
  )
  // )
);
