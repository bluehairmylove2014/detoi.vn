// Import necessary modules and functions
import { useReverseGeocodingMutation } from '../../fetching/mutation';
import {
  reverseGeocodingPropsType,
  reverseGeocodingResponseType,
} from '@business-layer/services';
import { getToken } from '@business-layer/business-logic/lib/auth/process/hooks/useAccessToken';

type useReverseGeocodingReturnType = {
  onReverseGeocoding: ({
    lat,
    lon,
  }: Omit<
    reverseGeocodingPropsType,
    'token'
  >) => Promise<reverseGeocodingResponseType>;
  isLoading: boolean;
};
export const useReverseGeocoding = (): useReverseGeocodingReturnType => {
  const reverseGeocodingMutation = useReverseGeocodingMutation();

  const onReverseGeocoding = ({
    lat,
    lon,
  }: Omit<
    reverseGeocodingPropsType,
    'token'
  >): Promise<reverseGeocodingResponseType> => {
    return new Promise((resolve, reject) => {
      getToken()
        .then((token) => {
          reverseGeocodingMutation
            .mutateAsync({ lat, lon, token })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        })
        .catch((error) => {
          console.error(
            'Cannot get token from secure storage from useForwardGeocoding with error: ',
            error
          );
        });
    });
  };

  return {
    onReverseGeocoding,
    isLoading: reverseGeocodingMutation.isPending,
  };
};
