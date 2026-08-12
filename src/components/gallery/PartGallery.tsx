'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAppStore } from '@/store';
import { getTranslation } from '@/data/translations';
import PartCard from '@/components/catalog/PartCard';
import { Part, PartImage } from '@/types/catalog';
import { getPartImages } from '@/utils/catalog';
import { Loader } from 'lucide-react';

interface PartGalleryProps {
  parts: Part[];
  loading?: boolean;
  emptyMessage?: string;
  showCategory?: boolean;
}

export default function PartGallery({
  parts,
  loading = false,
  emptyMessage,
  showCategory = true,
}: PartGalleryProps) {
  const { language } = useAppStore();
  const t = (key: string) => getTranslation(key, language);
  const [imagesMap, setImagesMap] = useState<Record<string, PartImage>>({});

  useEffect(() => {
    const map: Record<string, PartImage> = {};
    parts.forEach((part) => {
      const image = getPartImages(part.id)[0];
      if (image) {
        map[part.id] = image;
      }
    });
    setImagesMap(map);
  }, [parts]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <Loader className="animate-spin text-blue-600" size={32} />
      </div>
    );
  }

  if (parts.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-600">{emptyMessage || t('common.noResults')}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {parts.map((part) => (
        <Link key={part.id} href={`/parts/${part.id}`}>
          <PartCard part={part} image={imagesMap[part.id]} showCategory={showCategory} />
        </Link>
      ))}
    </div>
  );
}