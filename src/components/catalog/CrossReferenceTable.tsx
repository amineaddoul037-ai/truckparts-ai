'use client';

import Link from 'next/link';
import { useAppStore } from '@/store';
import { getTranslation } from '@/data/translations';
import { CrossReference, Part } from '@/types/catalog';
import VerificationBadge from '@/components/common/VerificationBadge';
import { ArrowRight } from 'lucide-react';

interface CrossReferenceTableProps {
  crossReferences: CrossReference[];
}

export default function CrossReferenceTable({ crossReferences }: CrossReferenceTableProps) {
  const { language } = useAppStore();
  const t = (key: string) => getTranslation(key, language);

  if (crossReferences.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <p className="text-gray-600">{t('common.noData')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {crossReferences.map((ref) => (
        <div
          key={ref.id}
          className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Alternative OEM: <span className="font-mono">{ref.alternativeOem}</span>
              </p>
              <p className="text-sm text-gray-600 mb-2">Manufacturer: {ref.manufacturer}</p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Compatibility:</strong> {ref.compatibility}
              </p>
              {ref.verification && <VerificationBadge status={ref.verification} />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
