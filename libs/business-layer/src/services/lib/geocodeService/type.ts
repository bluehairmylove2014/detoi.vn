import { ICoordinate } from '@business-layer/services/entities/coordinate';
import { IForwardGeocode, IReverseGeocode } from '../../entities';

export type forwardGeocodingPropsType = {
  key: string;
  token: string | null;
};
export type forwardGeocodingResponseType = IForwardGeocode[];

export enum ETypesRecommedationGeo {
  RESULT_SEARCHING,
  HISTORY,
  BOOK_MARK,
}
export type recommendationGeoType = IForwardGeocode & {
  typeRecommedationGeo:
  | ETypesRecommedationGeo.RESULT_SEARCHING
  | ETypesRecommedationGeo.HISTORY
  | ETypesRecommedationGeo.BOOK_MARK;
};

export type reverseGeocodingPropsType = {
  token: string | null;
} & ICoordinate;
export type reverseGeocodingResponseType = IReverseGeocode[];
