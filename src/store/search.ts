import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { GooglePlaceResult } from '../services/places';
import { SearchLocation } from '../shared/interfaces/location';

interface SearchState {
  selectedLocation: SearchLocation | null;
  setSelectedLocation: (data: SearchLocation) => void;
  searchResults: GooglePlaceResult[];
  setSearchResults: (data: GooglePlaceResult[]) => void;
}

export const useSearchStore = create<SearchState>()(
  devtools(
    (set) => ({
      selectedLocation: null,
      setSelectedLocation: (data) => set(() => ({ selectedLocation: data })),
      searchResults: [],
      setSearchResults: (data) => set(() => ({ searchResults: data })),
    }),
    {
      name: 'search-store',
    }
  )
);
