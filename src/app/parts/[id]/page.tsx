'use client';

import { DEMO_PARTS, TRUCK_MANUFACTURERS } from '@/types/catalog';
import PartGallery from '@/components/gallery/PartGallery';
import VerificationBadge from '@/components/common/VerificationBadge';
import FavoriteButton from '@/components/common/FavoriteButton';
import AdSlot from '@/components/ads/AdSlot';
import { useAppStore } from '@/store';
import { getTranslation } from '@/data/translations';
import Link from 'next/link';

export default function PartPage({ params }: { params: { id: string } }) {
  const { language } = useAppStore();
  const t = (key: string) => getTranslation(key, language);
  const part = DEMO_PARTS.find((p) => p.id === params.id);

  if (!part) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-gray-600">Part not found</p>
        <div className="text-center mt-4">
          <Link href="/parts" className="text-blue-600 hover:underline">
            Back to Parts
          </Link>
        </div>
      </div>
    );
  }

  const manufacturers = TRUCK_MANUFACTURERS;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Warning Banner */}
      <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800 text-sm">
          <strong>Note:</strong> {t('common.demo')}
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Images */}
        <div className="lg:col-span-2">
          <PartGallery images={part.images || []} partName={part.name} />
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <h1 className="text-2xl font-bold text-gray-900">{part.name}</h1>
              <FavoriteButton partId={part.id} size={28} />
            </div>
            <p className="text-gray-600 mb-4">{part.description}</p>
            <VerificationBadge status={part.verificationStatus} size="lg" />
          </div>

          {/* OEM References */}
          {part.oemReferences && part.oemReferences.length > 0 && (
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-900 mb-3">{t('part.oemReferences')}</h3>
              <div className="space-y-2">
                {part.oemReferences.map((ref) => (
                  <div key={ref.id} className="bg-gray-50 p-3 rounded">
                    <p className="font-mono text-sm font-semibold text-gray-900">{ref.referenceNumber}</p>
                    {manufacturers.find((m) => m.id === ref.manufacturerId) && (
                      <p className="text-xs text-gray-600 mt-1">
                        Manufacturer: {manufacturers.find((m) => m.id === ref.manufacturerId)?.name}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-2">
                      Status: {ref.verificationStatus === 'verified' ? '✓ Verified' : '⚠ Unverified'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ad Slot */}
          <div className="mt-6">
            <AdSlot placement="part-detail" />
          </div>
        </div>
      </div>

      {/* Ask Parts AI */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('ai.title')}</h2>
        <p className="text-gray-600 mb-4">Ask our Parts AI assistant about compatibility, specifications, or alternatives for this part.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          {t('ai.search')}
        </button>
      </section>
    </div>
  );
}
