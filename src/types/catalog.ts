/**
 * Verified truck manufacturers for TruckParts AI
 * These are real manufacturers with actual truck production
 */

export const TRUCK_MANUFACTURERS = [
  {
    id: 'volvo',
    name: 'Volvo Trucks',
    logo: '🚛',
    country: 'Sweden',
  },
  {
    id: 'daf',
    name: 'DAF',
    logo: '🚛',
    country: 'Netherlands',
  },
  {
    id: 'scania',
    name: 'Scania',
    logo: '🚛',
    country: 'Sweden',
  },
  {
    id: 'man',
    name: 'MAN',
    logo: '🚛',
    country: 'Germany',
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz Trucks',
    logo: '🚛',
    country: 'Germany',
  },
  {
    id: 'renault',
    name: 'Renault Trucks',
    logo: '🚛',
    country: 'France',
  },
  {
    id: 'iveco',
    name: 'Iveco',
    logo: '🚛',
    country: 'Italy',
  },
];

/**
 * DEMO DATA - NOT FOR ACTUAL PART IDENTIFICATION
 * Used for UI demonstration only
 */

export const DEMO_SYSTEMS = [
  { id: 'engine', name: 'Engine & Cooling', category: 'engine' },
  { id: 'transmission', name: 'Transmission', category: 'transmission' },
  { id: 'suspension', name: 'Suspension', category: 'suspension' },
  { id: 'brake', name: 'Brake System', category: 'brake' },
  { id: 'electrical', name: 'Electrical', category: 'electrical' },
  { id: 'other', name: 'Other', category: 'other' },
];

export const DEMO_PARTS = [
  {
    id: 'part-1',
    systemId: 'engine',
    name: 'Engine Oil Filter',
    category: 'Filters',
    description: '[DEMO DATA — NOT FOR PART IDENTIFICATION] Example engine oil filter part.',
    verificationStatus: 'needs-verification' as const,
    oemReferences: [
      {
        id: 'oem-1',
        partId: 'part-1',
        manufacturerId: 'volvo',
        referenceNumber: 'DEMO-OEM-001',
        verificationStatus: 'unverified',
      },
    ],
  },
  {
    id: 'part-2',
    systemId: 'brake',
    name: 'Brake Pad Set',
    category: 'Brakes',
    description: '[DEMO DATA — NOT FOR PART IDENTIFICATION] Example brake pad set.',
    verificationStatus: 'needs-verification' as const,
    oemReferences: [],
  },
  {
    id: 'part-3',
    systemId: 'electrical',
    name: 'Alternator',
    category: 'Electrical',
    description: '[DEMO DATA — NOT FOR PART IDENTIFICATION] Example alternator unit.',
    verificationStatus: 'needs-verification' as const,
    oemReferences: [],
  },
];
