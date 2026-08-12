// Data Models
export interface Manufacturer {
  id: string;
  name: string;
  logo?: string;
  country?: string;
  verified: boolean;
}

export interface TruckModel {
  id: string;
  manufacturerId: string;
  manufacturer: Manufacturer;
  name: string;
  generation?: string;
  startYear?: number;
  endYear?: number;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  verified: boolean;
}

export interface Engine {
  id: string;
  manufacturerId: string;
  manufacturer: Manufacturer;
  name: string;
  type: 'Diesel' | 'Petrol' | 'Natural Gas' | 'Electric' | 'Hybrid';
  power?: number; // kW
  torque?: number; // Nm
  displacement?: number; // cc
  year?: number;
  verified: boolean;
}

export interface System {
  id: string;
  name: string; // Cooling, Brake, Electrical, Transmission, etc.
  description?: string;
}

export interface Part {
  id: string;
  name: string;
  description?: string;
  category: string;
  oem?: string;
  manufacturerId?: string;
  manufacturer?: Manufacturer;
  systemId?: string;
  system?: System;
  specifications?: Record<string, string>;
  verified: VerificationStatus;
  images: PartImage[];
  crossReferences: CrossReference[];
  compatibilities: Compatibility[];
  sources: Source[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OEMReference {
  id: string;
  partId: string;
  part: Part;
  oem: string;
  manufacturer: string;
  verified: boolean;
}

export interface CrossReference {
  id: string;
  sourcePartId: string;
  sourcePart: Part;
  targetPartId: string;
  targetPart: Part;
  type: 'equivalent' | 'substitute' | 'upgrade' | 'downgrade';
  notes?: string;
  verified: boolean;
}

export interface Compatibility {
  id: string;
  partId: string;
  part: Part;
  truckModelId: string;
  truckModel: TruckModel;
  engineId?: string;
  engine?: Engine;
  startYear?: number;
  endYear?: number;
  notes?: string;
  verified: VerificationStatus;
}

export interface PartImage {
  id: string;
  partId: string;
  url: string;
  alt: string;
  sourceUrl?: string;
  license?: string; // CC, Commercial, Proprietary, Public Domain
  attribution?: string;
  uploaded: boolean;
  verified: boolean;
}

export interface Source {
  id: string;
  partId?: string;
  name: string;
  url?: string;
  type: 'manufacturer' | 'documentation' | 'api' | 'user' | 'other';
  verified: boolean;
}

export type VerificationStatus = 'VERIFIED' | 'CROSS-CHECKED' | 'NEEDS_VERIFICATION' | 'DEMO_DATA';

// UI State
export interface SearchFilters {
  query: string;
  category?: string;
  manufacturer?: string;
  truckModel?: string;
  engine?: string;
  crossReference?: string;
  verified?: VerificationStatus;
  sortBy?: 'relevance' | 'name' | 'newest' | 'popularity';
  page?: number;
  perPage?: number;
}

export interface SearchResult {
  parts: Part[];
  trucks: TruckModel[];
  engines: Engine[];
  total: number;
  page: number;
  perPage: number;
}

export interface ImageAnalysisResult {
  success: boolean;
  matchedParts?: Part[];
  confidence?: number;
  error?: string;
}

// User Features
export interface UserPreferences {
  language: 'en' | 'fr' | 'ar';
  theme?: 'light' | 'dark';
  favorites: string[]; // Part IDs
  recentlyViewed: string[];
  savedTrucks: string[];
  searchHistory: string[];
}

// API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
