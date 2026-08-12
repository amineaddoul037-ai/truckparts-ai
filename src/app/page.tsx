'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Truck, Zap, Award } from 'lucide-react';
import SearchBar from '@/components/search/SearchBar';
import ManufacturerCard from '@/components/catalog/ManufacturerCard';
import AdSlot from '@/components/ads/AdSlot';
import { TRUCK_MANUFACTURERS } from '@/types/catalog';
import { useAppStore } from '@/store';
import { getTranslation } from '@/data/translations';

export default function Home() {
  const { language } = useAppStore();
  const t = (key: string) => getTranslation(key, language);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-16 sm:py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('home.title')}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">{t('home.subtitle')}</p>

            {/* Main Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar
                placeholder={t('home.searchPlaceholder')}
                onSearch={(query) => setSearchQuery(query)}
              />
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/search"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <Search size={20} />
                {t('search.title')}
              </Link>
              <Link
                href="/trucks"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition"
              >
                <Truck size={20} />
                {t('nav.trucks')}
              </Link>
              <Link
                href="/parts"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition"
              >
                <Zap size={20} />
                {t('nav.parts')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Slot - Top */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <AdSlot placement="homepage-top" />
        </div>
      </section>

      {/* Manufacturers Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('home.browseManufacturers')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUCK_MANUFACTURERS.map((manufacturer) => (
              <ManufacturerCard key={manufacturer.id} manufacturer={manufacturer} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Slot - Middle */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <AdSlot placement="homepage-middle" />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Search className="text-blue-600" size={32} />}
              title="OEM Reference Search"
              description="Search by OEM number, part name, truck model or engine"
            />
            <FeatureCard
              icon={<Award className="text-amber-600" size={32} />}
              title="Verified Compatibility"
              description="Cross-checked compatibility data with trusted sources"
            />
            <FeatureCard
              icon={<Truck className="text-gray-600" size={32} />}
              title="Multi-Manufacturer"
              description="Support for Volvo, DAF, Scania, MAN, Mercedes, Renault, Iveco and more"
            />
          </div>
        </div>
      </section>

      {/* Ad Slot - Bottom */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <AdSlot placement="homepage-bottom" />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
