export interface IForwardGeocode {
  lat: number;
  lon: number;
  display_name: string;
  amenity: string | null;
  house_number: string | null;
  road: string | null;
  ward: string | null;
  district: string | null;
  province: string | null;
  country: string | null;
}
export interface IReverseGeocode {
  lat: number;
  lon: number;
  display_name: string; // Ex: Combination of all below
  amenity: string | null; // Ex: Hospital, School,...
  house_number: string | null;
  road: string | null;
  ward: string;
  district: string;
  province: string;
  country: string;
}
