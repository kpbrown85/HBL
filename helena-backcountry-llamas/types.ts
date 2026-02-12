
export interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  startDate: string;
  endDate: string;
  numLlamas: number;
  trailerNeeded: boolean;
  isFirstTime: boolean;
  message?: string;
}

export interface PricingBreakdown {
  days: number;
  llamaCost: number;
  trailerCost: number;
  clinicFee: number;
  discountAmount: number;
  total: number;
}

export interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  category: 'trail' | 'camp' | 'hunting' | 'llama';
  views: number;
}
