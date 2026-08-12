/**
 * Search and filtering utilities
 */

import { Part, SearchResult } from '@/types';
import { DEMO_PARTS } from '@/types/catalog';

/**
 * Debounce function for search
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Simple full-text search implementation
 */
export const searchParts = (query: string, parts: Part[] = DEMO_PARTS): Part[] => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];

  return parts.filter(
    (part) =>
      part.name.toLowerCase().includes(normalizedQuery) ||
      part.description?.toLowerCase().includes(normalizedQuery) ||
      part.category.toLowerCase().includes(normalizedQuery),
  );
};

/**
 * Filter parts by category
 */
export const filterPartsByCategory = (parts: Part[], category: string): Part[] => {
  return parts.filter((part) => part.category === category);
};

/**
 * Sort parts by relevance
 */
export const sortPartsByRelevance = (parts: Part[], query: string): Part[] => {
  const normalized = query.toLowerCase();
  return [...parts].sort((a, b) => {
    const aMatchName = a.name.toLowerCase().startsWith(normalized) ? 1 : 0;
    const bMatchName = b.name.toLowerCase().startsWith(normalized) ? 1 : 0;
    return bMatchName - aMatchName;
  });
};

/**
 * Search cache
 */
class SearchCache {
  private cache: Map<string, SearchResult[]> = new Map();
  private maxSize = 50;

  get(key: string): SearchResult[] | null {
    return this.cache.get(key) || null;
  }

  set(key: string, results: SearchResult[]): void {
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, results);
  }

  clear(): void {
    this.cache.clear();
  }
}

export const searchCache = new SearchCache();
