export type Brand = {
  id: string;
  name: string;
  founded: number;
  /** ISO 3166-1 alpha-2 country code, uppercase (e.g. "CH", "FR", "JP"). */
  country: string;
};

export type BrandView = Brand & {
  hasLogo: boolean;
  countryName: string;
  /** Lowercased ISO code, for `react-circle-flags`. */
  countryCode: string;
};

export type Watch = {
  id: string;
  name: string;
  thumbnail: string;
  images: string[];
};
