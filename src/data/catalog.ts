import { Manufacturer, Truck, Engine, Part, CrossReference, Compatibility, PartImage, Source } from '@/types/catalog';

// Demo manufacturers
export const DEMO_MANUFACTURERS: Manufacturer[] = [
  {
    id: '1',
    name: 'Volvo',
    country: 'Sweden',
    logo: 'https://via.placeholder.com/100?text=Volvo',
    description: 'Premium truck manufacturer',
    verification: 'DEMO DATA',
  },
  {
    id: '2',
    name: 'DAF',
    country: 'Netherlands',
    logo: 'https://via.placeholder.com/100?text=DAF',
    description: 'European truck leader',
    verification: 'DEMO DATA',
  },
  {
    id: '3',
    name: 'Scania',
    country: 'Sweden',
    logo: 'https://via.placeholder.com/100?text=Scania',
    description: 'Heavy-duty truck manufacturer',
    verification: 'DEMO DATA',
  },
  {
    id: '4',
    name: 'MAN',
    country: 'Germany',
    logo: 'https://via.placeholder.com/100?text=MAN',
    description: 'German engineering trucks',
    verification: 'DEMO DATA',
  },
];

// Demo engines
export const DEMO_ENGINES: Engine[] = [
  {
    id: 'e1',
    manufacturer: 'Volvo',
    model: 'D13',
    displacement: 12780,
    cylinders: 6,
    power: 420,
    torque: 2100,
    verification: 'DEMO DATA',
  },
  {
    id: 'e2',
    manufacturer: 'Volvo',
    model: 'D11',
    displacement: 10780,
    cylinders: 6,
    power: 350,
    torque: 1700,
    verification: 'DEMO DATA',
  },
  {
    id: 'e3',
    manufacturer: 'DAF',
    model: 'XF',
    displacement: 12900,
    cylinders: 6,
    power: 440,
    torque: 2100,
    verification: 'DEMO DATA',
  },
];

// Demo trucks
export const DEMO_TRUCKS: Truck[] = [
  {
    id: 't1',
    manufacturerId: '1',
    model: 'FH16',
    year: 2022,
    engineId: 'e1',
    axles: 3,
    maxGvwr: 25000,
    cabType: 'Sleeper',
    verification: 'DEMO DATA',
  },
  {
    id: 't2',
    manufacturerId: '1',
    model: 'FH16',
    year: 2021,
    engineId: 'e2',
    axles: 3,
    maxGvwr: 25000,
    cabType: 'Sleeper',
    verification: 'DEMO DATA',
  },
  {
    id: 't3',
    manufacturerId: '2',
    model: 'XF105',
    year: 2020,
    engineId: 'e3',
    axles: 3,
    maxGvwr: 26000,
    cabType: 'Sleeper',
    verification: 'DEMO DATA',
  },
];

// Demo parts
export const DEMO_PARTS: Part[] = [
  {
    id: 'p1',
    name: 'Oil Filter',
    oem: 'DEMO-OEM-20430612',
    category: 'Filters',
    description: 'Engine oil filter - Demo data for demonstration only',
    price: 45,
    availability: 'in-stock',
    verification: 'DEMO DATA',
  },
  {
    id: 'p2',
    name: 'Air Filter',
    oem: 'DEMO-OEM-20545956',
    category: 'Filters',
    description: 'Engine air filter - Demo data for demonstration only',
    price: 35,
    availability: 'in-stock',
    verification: 'DEMO DATA',
  },
  {
    id: 'p3',
    name: 'Cabin Air Filter',
    oem: 'DEMO-OEM-20898145',
    category: 'Filters',
    description: 'Cabin air filter - Demo data for demonstration only',
    price: 28,
    availability: 'in-stock',
    verification: 'DEMO DATA',
  },
  {
    id: 'p4',
    name: 'Fuel Filter',
    oem: 'DEMO-OEM-20413315',
    category: 'Filters',
    description: 'Diesel fuel filter - Demo data for demonstration only',
    price: 52,
    availability: 'in-stock',
    verification: 'DEMO DATA',
  },
  {
    id: 'p5',
    name: 'Brake Pad Set',
    oem: 'DEMO-OEM-21302503',
    category: 'Brakes',
    description: 'Front brake pads - Demo data for demonstration only',
    price: 185,
    availability: 'in-stock',
    verification: 'DEMO DATA',
  },
  {
    id: 'p6',
    name: 'Alternator',
    oem: 'DEMO-OEM-20399387',
    category: 'Electrical',
    description: 'Truck alternator - Demo data for demonstration only',
    price: 425,
    availability: 'limited',
    verification: 'DEMO DATA',
  },
];

// Demo cross references
export const DEMO_CROSS_REFERENCES: CrossReference[] = [
  {
    id: 'cr1',
    originalPartId: 'p1',
    alternativeOem: 'DEMO-ALT-20430500',
    manufacturer: 'Alternative Supplier',
    compatibility: 'Direct replacement',
    verification: 'DEMO DATA',
  },
  {
    id: 'cr2',
    originalPartId: 'p2',
    alternativeOem: 'DEMO-ALT-20545900',
    manufacturer: 'Alternative Supplier',
    compatibility: 'Direct replacement',
    verification: 'DEMO DATA',
  },
];

// Demo compatibility
export const DEMO_COMPATIBILITY: Compatibility[] = [
  {
    id: 'c1',
    partId: 'p1',
    truckId: 't1',
    engineId: 'e1',
    compatible: true,
    notes: 'Direct fit - Demo data only',
    verification: 'DEMO DATA',
  },
  {
    id: 'c2',
    partId: 'p1',
    truckId: 't2',
    engineId: 'e2',
    compatible: true,
    notes: 'Direct fit - Demo data only',
    verification: 'DEMO DATA',
  },
  {
    id: 'c3',
    partId: 'p5',
    truckId: 't1',
    engineId: 'e1',
    compatible: true,
    notes: 'Front axle - Demo data only',
    verification: 'DEMO DATA',
  },
];

// Demo sources
export const DEMO_SOURCES: Source[] = [
  {
    id: 'src1',
    name: 'Demo Database',
    type: 'internal',
    verified: true,
  },
];

// Demo images
export const DEMO_PART_IMAGES: PartImage[] = [
  {
    id: 'img1',
    partId: 'p1',
    url: 'https://via.placeholder.com/300x300?text=Oil+Filter',
    title: 'Oil Filter',
    license: 'Demo',
    source: 'Demo Database',
  },
  {
    id: 'img2',
    partId: 'p2',
    url: 'https://via.placeholder.com/300x300?text=Air+Filter',
    title: 'Air Filter',
    license: 'Demo',
    source: 'Demo Database',
  },
  {
    id: 'img3',
    partId: 'p5',
    url: 'https://via.placeholder.com/300x300?text=Brake+Pads',
    title: 'Brake Pads',
    license: 'Demo',
    source: 'Demo Database',
  },
];
