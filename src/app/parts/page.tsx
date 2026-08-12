'use client';

import { DEMO_PARTS } from '@/types/catalog';
import PartCard from '@/components/catalog/PartCard';
import AdSlot from '@/components/ads/AdSlot';
import { useAppStore } from '@/store';
import { getTranslation } from '@/data/translations';

export default function PartsPage() {
  const { language } = useAppStore();
  const t = (key: string) => getTranslation(key, language);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('nav.parts')}</h1>

      <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800 text-sm">
          <strong>Note:</strong> {t('common.demo')}
        </p>
      </div>

      {/* Ad Slot */}
      <div className="mb-8">
        <AdSlot placement="parts-top" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {DEMO_PARTS.map((part) => (
          <PartCard key={part.id} part={part} />
        ))}
      </div>

      {/* Ad Slot */}
      <div className="mt-12">
        <AdSlot placement="parts-bottom" />
      </div>
    </div>
  );
}
