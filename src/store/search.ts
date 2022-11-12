import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface SearchState {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
}

export const useSearchStore = create<SearchState>()(
  devtools(
    persist(
      (set) => ({
        searchTerm: '',
        setSearchTerm: (val: string) => set(() => ({ searchTerm: val })),
      }),
      {
        name: 'search-store',
      }
    )
  )
);
