/**
 * Client-side storage utilities for favorites and search history
 */

const FAVORITES_KEY = 'truckparts-ai-favorites';
const SEARCH_HISTORY_KEY = 'truckparts-ai-search-history';
const MAX_SEARCH_HISTORY = 50;

export interface StoredFavorite {
  partId: string;
  addedAt: string;
}

export interface StoredSearchItem {
  query: string;
  timestamp: string;
  type: 'text' | 'image' | 'filter';
}

/**
 * Favorites management
 */
export const favoritesStorage = {
  get: (): StoredFavorite[] => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading favorites:', error);
      return [];
    }
  },

  add: (partId: string): void => {
    if (typeof window === 'undefined') return;
    try {
      const favorites = favoritesStorage.get();
      if (!favorites.some((f) => f.partId === partId)) {
        favorites.push({ partId, addedAt: new Date().toISOString() });
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      }
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  },

  remove: (partId: string): void => {
    if (typeof window === 'undefined') return;
    try {
      const favorites = favoritesStorage.get().filter((f) => f.partId !== partId);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  },

  isFavorite: (partId: string): boolean => {
    return favoritesStorage.get().some((f) => f.partId === partId);
  },
};

/**
 * Search history management
 */
export const searchHistoryStorage = {
  get: (): StoredSearchItem[] => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = localStorage.getItem(SEARCH_HISTORY_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading search history:', error);
      return [];
    }
  },

  add: (query: string, type: 'text' | 'image' | 'filter' = 'text'): void => {
    if (typeof window === 'undefined') return;
    try {
      let history = searchHistoryStorage.get();
      history = history.filter((item) => item.query !== query);
      history.unshift({ query, type, timestamp: new Date().toISOString() });
      if (history.length > MAX_SEARCH_HISTORY) {
        history = history.slice(0, MAX_SEARCH_HISTORY);
      }
      localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history));
    } catch (error) {
      console.error('Error adding to search history:', error);
    }
  },

  clear: (): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(SEARCH_HISTORY_KEY);
    } catch (error) {
      console.error('Error clearing search history:', error);
    }
  },
};
