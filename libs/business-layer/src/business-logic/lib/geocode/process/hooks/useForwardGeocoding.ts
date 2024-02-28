// Import necessary modules and functions
import { useForwardGeocodingMutation } from '../../fetching/mutation';
import {
  forwardGeocodingPropsType,
  forwardGeocodingResponseType,
} from '@business-layer/services';
import { getToken } from '@business-layer/business-logic/lib/auth/process/hooks/useAccessToken';

type useForwardGeocodingReturnType = {
  onForwardGeocoding: ({
    key,
  }: Pick<
    forwardGeocodingPropsType,
    'key'
  >) => Promise<forwardGeocodingResponseType>;
  isLoading: boolean;
};
export const useForwardGeocoding = (): useForwardGeocodingReturnType => {
  const forwardGeocodingMutation = useForwardGeocodingMutation();

  const onForwardGeocoding = ({
    key,
  }: Pick<
    forwardGeocodingPropsType,
    'key'
  >): Promise<forwardGeocodingResponseType> => {
    return new Promise((resolve, reject) => {
      getToken()
        .then((token) => {
          forwardGeocodingMutation
            .mutateAsync({ key, token })
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
    onForwardGeocoding,
    isLoading: forwardGeocodingMutation.isPending,
  };
};
