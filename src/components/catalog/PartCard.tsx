'use client';

import { useState } from 'react';
import { Wrench } from 'lucide-react';
import { useAppStore } from '@/store';
import { getTranslation } from '@/data/translations';
import VerificationBadge from '@/components/common/VerificationBadge';
import FavoriteButton from '@/components/common/FavoriteButton';
import { Part, PartImage } from '@/types/catalog';
import Image from 'next/image';

interface PartCardProps {
  part: Part;
  image?: PartImage;
  showCategory?: boolean;
}

export default function PartCard({ part, image, showCategory = true }: PartCardProps) {
  const { language } = useAppStore();
  const t = (key: string) => getTranslation(key, language);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        {image && !imageError ? (
          <Image
            src={image.url}
            alt={image.title}
            width={300}
            height={200}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-gray-400 text-center">
            <Wrench size={32} className="mx-auto mb-2" />
            <p className="text-sm">No image</p>
          </div>
        )}
        <div className="absolute top-2 right-2">
          <FavoriteButton partId={part.id} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        {showCategory && (
          <div className="mb-2">
            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-medium">
              {part.category}
            </span>
          </div>
        )}

        {/* Name */}
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{part.name}</h3>

        {/* OEM */}
        <p className="text-sm text-gray-600 mb-2 font-mono break-all">{part.oem}</p>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{part.description}</p>

        {/* Verification */}
        {part.verification && <VerificationBadge status={part.verification} />}

        {/* Price and Availability */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-bold text-gray-900">${part.price}</p>
              <p
                className={`text-xs font-medium ${
                  part.availability === 'in-stock'
                    ? 'text-green-600'
                    : part.availability === 'limited'
                      ? 'text-amber-600'
                      : 'text-red-600'
                }`}
              >
                {part.availability === 'in-stock'
                  ? '✓ In Stock'
                  : part.availability === 'limited'
                    ? '⚠ Limited'
                    : '✗ Out of Stock'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}