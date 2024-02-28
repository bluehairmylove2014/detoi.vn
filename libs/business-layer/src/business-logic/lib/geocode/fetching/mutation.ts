import { useMutation } from '@tanstack/react-query';
import {
  GeocodeService,
  forwardGeocodingPropsType,
  forwardGeocodingResponseType,
  reverseGeocodingPropsType,
  reverseGeocodingResponseType,
} from '@business-layer/services';

const geocodeService = new GeocodeService();

export const useForwardGeocodingMutation = () => {
  return useMutation<
    forwardGeocodingResponseType,
    Error,
    forwardGeocodingPropsType,
    unknown
  >({
    mutationFn: geocodeService.forwardGeocoding,
  });
};

export const useReverseGeocodingMutation = () => {
  return useMutation<
    reverseGeocodingResponseType,
    Error,
    reverseGeocodingPropsType,
    unknown
  >({
    mutationFn: geocodeService.reverseGeocoding,
  });
};
