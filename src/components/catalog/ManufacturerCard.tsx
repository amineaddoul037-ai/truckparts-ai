'use client';

import Link from 'next/link';
import { Manufacturer } from '@/types';

interface ManufacturerCardProps {
  manufacturer: Manufacturer;
}

export default function ManufacturerCard({ manufacturer }: ManufacturerCardProps) {
  return (
    <Link href={`/trucks/${manufacturer.id}`}>
      <div className="bg-white rounded-lg border border-gray-200 hover:border-blue-600 hover:shadow-lg transition p-6 cursor-pointer">
        <div className="text-4xl mb-4">{manufacturer.logo || '🚛'}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{manufacturer.name}</h3>
        {manufacturer.country && <p className="text-sm text-gray-600">{manufacturer.country}</p>}
        <div className="mt-4 text-blue-600 font-medium text-sm hover:underline">Browse Models →</div>
      </div>
    </Link>
  );
}
