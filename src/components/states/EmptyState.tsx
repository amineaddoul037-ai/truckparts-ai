'use client';

import { Search } from 'lucide-react';
import { useAppStore } from '@/store';
import { getTranslation } from '@/data/translations';

interface EmptyStateProps {
  message: string;
  icon?: React.ReactNode;
}

export default function EmptyState({ message, icon }: EmptyStateProps) {
  const { language } = useAppStore();
  const t = (key: string) => getTranslation(key, language);

  return (
    <div className="flex flex-col items-center justify-center py-16">
      {icon || <Search size={48} className="text-gray-400 mb-4" />}
      <p className="text-gray-600 text-lg">{message}</p>
    </div>
  );
}