import { Part, TruckModel, Engine, SearchResult, ApiResponse } from './index';

// Search Endpoints
export interface SearchRequest {
  query: string;
  filters?: {
    category?: string;
    manufacturer?: string;
    truckModel?: string;
    engine?: string;
    verified?: boolean;
  };
  sort?: 'relevance' | 'name' | 'newest';
  page?: number;
  perPage?: number;
}

export interface SearchResponse extends ApiResponse<SearchResult> {}

// Part Endpoints
export interface PartResponse extends ApiResponse<Part> {}

export interface PartListResponse extends ApiResponse<{
  parts: Part[];
  total: number;
}> {}

// Truck Endpoints
export interface TruckResponse extends ApiResponse<TruckModel> {}

export interface TruckListResponse extends ApiResponse<{
  trucks: TruckModel[];
  total: number;
}> {}

// Engine Endpoints
export interface EngineResponse extends ApiResponse<Engine> {}

export interface EngineListResponse extends ApiResponse<{
  engines: Engine[];
  total: number;
}> {}

// AI Assistant
export interface AIQuery {
  question: string;
  context?: {
    partId?: string;
    truckModelId?: string;
    engineId?: string;
  };
}

export interface AIResponse extends ApiResponse<{
  answer: string;
  sources: Array<{
    id: string;
    type: 'part' | 'truck' | 'engine';
    name: string;
  }>;
  confidence: number;
}> {}

// Image Analysis
export interface ImageAnalysisRequest {
  imageUrl?: string;
  imageData?: string; // base64
  fileName?: string;
}

export interface ImageAnalysisResponse extends ApiResponse<{
  matchedParts: Part[];
  confidence: number;
}> {}
