export interface Brand {
  name: string;
  logo?: string; // Optional logo URL
}

export interface BrandSliderProps {
  title?: string;
  brands: Brand[];
}

