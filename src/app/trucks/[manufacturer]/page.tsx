'use client';

import { TRUCK_MANUFACTURERS } from '@/types/catalog';
import AdSlot from '@/components/ads/AdSlot';
import Link from 'next/link';

export default function ManufacturerPage({ params }: { params: { manufacturer: string } }) {
  const manufacturer = TRUCK_MANUFACTURERS.find((m) => m.id === params.manufacturer);

  if (!manufacturer) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-gray-600">Manufacturer not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/trucks" className="text-blue-600 hover:underline">
          ← Back to Manufacturers
        </Link>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        <div className="text-6xl mb-4">{manufacturer.logo || '🚛'}</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{manufacturer.name}</h1>
        {manufacturer.country && <p className="text-gray-600 mb-4">Country: {manufacturer.country}</p>}
        {manufacturer.description && <p className="text-gray-600">{manufacturer.description}</p>}
      </div>

      {/* Ad Slot */}
      <div className="mb-8">
        <AdSlot placement="manufacturer-detail" />
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-gray-600 mb-4">Models and detailed specifications coming soon</p>
        <Link href="/search" className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Search for parts
        </Link>
      </div>
    </div>
  );
}
