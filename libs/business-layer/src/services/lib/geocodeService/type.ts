import { ICoordinate } from '@business-layer/services/entities/coordinate';
import { IForwardGeocode, IReverseGeocode } from '../../entities';

export type forwardGeocodingPropsType = {
  key: string;
  token: string | null;
};
export type forwardGeocodingResponseType = IForwardGeocode[];

export type reverseGeocodingPropsType = {
  token: string | null;
} & ICoordinate;
export type reverseGeocodingResponseType = IReverseGeocode[];
