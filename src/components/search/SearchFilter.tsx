'use client';

import { useAppStore } from '@/store';
import { getTranslation } from '@/data/translations';
import { getAllCategories } from '@/utils/catalog';

interface SearchFilterProps {
  selectedCategory?: string;
  onCategoryChange: (category: string | undefined) => void;
  categories?: string[];
}

export default function SearchFilter({
  selectedCategory,
  onCategoryChange,
  categories,
}: SearchFilterProps) {
  const { language } = useAppStore();
  const t = (key: string) => getTranslation(key, language);
  const allCategories = categories || getAllCategories();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="font-semibold text-gray-900 mb-4">Category</h3>
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="radio"
            name="category"
            value=""
            checked={!selectedCategory}
            onChange={() => onCategoryChange(undefined)}
            className="mr-2"
          />
          <span className="text-gray-700">All Categories</span>
        </label>
        {allCategories.map((category) => (
          <label key={category} className="flex items-center">
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => onCategoryChange(category)}
              className="mr-2"
            />
            <span className="text-gray-700">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
}