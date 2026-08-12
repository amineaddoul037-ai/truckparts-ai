import {
  DEMO_PARTS,
  DEMO_TRUCKS,
  DEMO_MANUFACTURERS,
  DEMO_ENGINES,
  DEMO_COMPATIBILITY,
  DEMO_CROSS_REFERENCES,
  DEMO_PART_IMAGES,
} from '@/data/catalog';
import { Part, Truck, Manufacturer, Compatibility, CrossReference, PartImage } from '@/types/catalog';

// Search parts by multiple criteria
export function searchParts(query: string, category?: string): Part[] {
  const lowerQuery = query.toLowerCase().trim();

  if (!lowerQuery) {
    return category ? DEMO_PARTS.filter((p) => p.category === category) : DEMO_PARTS;
  }

  return DEMO_PARTS.filter((part) => {
    const matchesQuery =
      part.name.toLowerCase().includes(lowerQuery) ||
      part.oem.toLowerCase().includes(lowerQuery) ||
      part.description.toLowerCase().includes(lowerQuery);

    const matchesCategory = !category || part.category === category;

    return matchesQuery && matchesCategory;
  });
}

// Get part by ID
export function getPartById(id: string): Part | undefined {
  return DEMO_PARTS.find((p) => p.id === id);
}

// Get parts by category
export function getPartsByCategory(category: string): Part[] {
  return DEMO_PARTS.filter((p) => p.category === category);
}

// Get all categories
export function getAllCategories(): string[] {
  return Array.from(new Set(DEMO_PARTS.map((p) => p.category)));
}

// Search trucks
export function searchTrucks(query: string, manufacturerId?: string): Truck[] {
  const lowerQuery = query.toLowerCase().trim();

  const trucks = DEMO_TRUCKS.filter((truck) => {
    const mfg = DEMO_MANUFACTURERS.find((m) => m.id === truck.manufacturerId);
    const matchesQuery =
      truck.model.toLowerCase().includes(lowerQuery) ||
      (mfg?.name.toLowerCase().includes(lowerQuery) || false);

    const matchesMfg = !manufacturerId || truck.manufacturerId === manufacturerId;

    return matchesQuery && matchesMfg;
  });

  return trucks;
}

// Get truck by ID
export function getTruckById(id: string): Truck | undefined {
  return DEMO_TRUCKS.find((t) => t.id === id);
}

// Get trucks by manufacturer
export function getTrucksByManufacturer(manufacturerId: string): Truck[] {
  return DEMO_TRUCKS.filter((t) => t.manufacturerId === manufacturerId);
}

// Get manufacturer by ID
export function getManufacturerById(id: string): Manufacturer | undefined {
  return DEMO_MANUFACTURERS.find((m) => m.id === id);
}

// Get manufacturer name
export function getManufacturerName(id: string): string {
  return DEMO_MANUFACTURERS.find((m) => m.id === id)?.name || 'Unknown';
}

// Get compatible parts for truck
export function getCompatibleParts(truckId: string): Part[] {
  const compatibilityIds = DEMO_COMPATIBILITY.filter(
    (c) => c.truckId === truckId && c.compatible
  ).map((c) => c.partId);

  return DEMO_PARTS.filter((p) => compatibilityIds.includes(p.id));
}

// Get compatibility info for part and truck
export function getCompatibility(partId: string, truckId: string): Compatibility | undefined {
  return DEMO_COMPATIBILITY.find((c) => c.partId === partId && c.truckId === truckId);
}

// Get cross references for part
export function getCrossReferences(partId: string): CrossReference[] {
  return DEMO_CROSS_REFERENCES.filter((cr) => cr.originalPartId === partId);
}

// Get images for part
export function getPartImages(partId: string): PartImage[] {
  return DEMO_PART_IMAGES.filter((img) => img.partId === partId);
}

// Get primary image for part
export function getPrimaryPartImage(partId: string): PartImage | undefined {
  return DEMO_PART_IMAGES.find((img) => img.partId === partId);
}
