'use client';

import { Loader } from 'lucide-react';

export default function LoadingState() {
  return (
    <div className="flex justify-center items-center py-16">
      <Loader className="animate-spin text-blue-600" size={32} />
    </div>
  );
}