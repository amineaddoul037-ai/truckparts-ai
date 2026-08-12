'use client';

import { AlertCircle } from 'lucide-react';
import { useAppStore } from '@/store';
import { getTranslation } from '@/data/translations';

interface ErrorStateProps {
  message?: string;
}

export default function ErrorState({ message }: ErrorStateProps) {
  const { language } = useAppStore();
  const t = (key: string) => getTranslation(key, language);

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex items-start gap-4">
      <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={24} />
      <div>
        <h3 className="font-semibold text-red-900 mb-1">Error</h3>
        <p className="text-red-800">{message || t('common.error')}</p>
      </div>
    </div>
  );
}