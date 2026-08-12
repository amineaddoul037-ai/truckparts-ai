/**
 * Global state management using Zustand
 */

import { create } from 'zustand';
import { Part, Manufacturer } from '@/types';
import { DEMO_PARTS, TRUCK_MANUFACTURERS } from '@/types/catalog';

interface AppStore {
  // Theme and language
  language: 'en' | 'fr' | 'ar';
  setLanguage: (lang: 'en' | 'fr' | 'ar') => void;

  // Favorites
  favorites: string[];
  toggleFavorite: (partId: string) => void;
  isFavorite: (partId: string) => boolean;

  // Search history
  searchHistory: string[];
  addToSearchHistory: (query: string) => void;
  clearSearchHistory: () => void;

  // Recent parts
  recentParts: string[];
  addRecentPart: (partId: string) => void;

  // Selected filters
  selectedManufacturer: string | null;
  setSelectedManufacturer: (id: string | null) => void;

  selectedModel: string | null;
  setSelectedModel: (id: string | null) => void;
}

export const useAppStore = create<AppStore>((set, get) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),

  favorites: [],
  toggleFavorite: (partId) =>
    set((state) => ({
      favorites: state.favorites.includes(partId)
        ? state.favorites.filter((id) => id !== partId)
        : [...state.favorites, partId],
    })),
  isFavorite: (partId) => get().favorites.includes(partId),

  searchHistory: [],
  addToSearchHistory: (query) =>
    set((state) => {
      const history = [query, ...state.searchHistory.filter((q) => q !== query)];
      return { searchHistory: history.slice(0, 20) };
    }),
  clearSearchHistory: () => set({ searchHistory: [] }),

  recentParts: [],
  addRecentPart: (partId) =>
    set((state) => {
      const recent = [partId, ...state.recentParts.filter((id) => id !== partId)];
      return { recentParts: recent.slice(0, 10) };
    }),

  selectedManufacturer: null,
  setSelectedManufacturer: (id) => set({ selectedManufacturer: id }),

  selectedModel: null,
  setSelectedModel: (id) => set({ selectedModel: id }),
}));
