export interface IForwardGeocode {
  boundingbox: number[]; // Area
  lat: number;
  lon: number;
  display_name: string;
  importance: number; // Precision of the result
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
