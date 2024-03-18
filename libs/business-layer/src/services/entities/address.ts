export interface IAddress {
  id: string;
  addressLine: string;
  ward: string | null;
  district: string | null;
  province: string | null;
  country: string | null;
  lat: number;
  lon: number;
}
