'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAppStore } from '@/store';
import { getTranslation } from '@/data/translations';
import { Compatibility, Part, Truck } from '@/types/catalog';
import { getManufacturerName, getTruckById } from '@/utils/catalog';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import VerificationBadge from '@/components/common/VerificationBadge';

interface CompatibilityTableProps {
  compatibility: Compatibility[];
  parts: Record<string, Part>;
}

export default function CompatibilityTable({ compatibility, parts }: CompatibilityTableProps) {
  const { language } = useAppStore();
  const t = (key: string) => getTranslation(key, language);

  if (compatibility.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <p className="text-gray-600">{t('common.noData')}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 text-left font-semibold text-gray-900">Truck Model</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900">Engine</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900">Compatible</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900">Notes</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900">Verification</th>
          </tr>
        </thead>
        <tbody>
          {compatibility.map((compat) => (
            <tr key={compat.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-3">
                <Link href={`/trucks/${compat.truckId}`} className="text-blue-600 hover:underline">
                  {getTruckById(compat.truckId)?.model || 'Unknown'}
                </Link>
              </td>
              <td className="px-4 py-3 text-gray-600">{compat.engineId || 'N/A'}</td>
              <td className="px-4 py-3">
                {compat.compatible ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-green-600 font-medium">Yes</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <XCircle size={16} className="text-red-600" />
                    <span className="text-red-600 font-medium">No</span>
                  </div>
                )}
              </td>
              <td className="px-4 py-3 text-gray-600 text-xs">{compat.notes || '-'}</td>
              <td className="px-4 py-3">
                {compat.verification && <VerificationBadge status={compat.verification} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
