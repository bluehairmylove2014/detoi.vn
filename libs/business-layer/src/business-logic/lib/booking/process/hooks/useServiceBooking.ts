// Import necessary modules and functions
import { useServiceBookingMutation } from '../../fetching/mutation';
import { serviceBookingResponseType } from '@business-layer/services';
import { getToken } from '@business-layer/business-logic/lib/auth/process/hooks/useAccessToken';

function convertValueWithTypeToString(value: any): {
  valueString: string;
  typeString: string;
} {
  let typeString: string = typeof value;
  let valueString: string = String(value);

  if (typeString === 'object') {
    if (Array.isArray(value)) {
      typeString = 'array';
      valueString = JSON.stringify(value);
    } else if (value === null) {
      typeString = 'null';
      valueString = 'null';
    }
  } else if (typeString === 'undefined') {
    typeString = 'undefined';
    valueString = 'undefined';
  } else if (typeString === 'function') {
    typeString = 'function';
    valueString = value.toString();
  }

  return { valueString, typeString };
}

type useServiceBookingReturnType = {
  onServiceBooking: (
    bookingData: { key: string; value: any }[]
  ) => Promise<serviceBookingResponseType>;
  isLoading: boolean;
};
export const useServiceBooking = (): useServiceBookingReturnType => {
  const serviceBookingMutation = useServiceBookingMutation();

  const onServiceBooking = (
    bookingData: { key: string; value: any }[]
  ): Promise<serviceBookingResponseType> => {
    return new Promise((resolve, reject) => {
      getToken()
        .then((token) => {
          serviceBookingMutation
            .mutateAsync({
              order: bookingData.map((d) => {
                const dataFormatted = convertValueWithTypeToString(d.value);
                return {
                  name: d.key,
                  dataType: dataFormatted.typeString,
                  value: dataFormatted.valueString,
                };
              }),
              token,
            })
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
    onServiceBooking,
    isLoading: serviceBookingMutation.isPending,
  };
};
