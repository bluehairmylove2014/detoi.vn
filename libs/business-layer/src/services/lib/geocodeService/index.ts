import {
  forwardGeocodingEndpoint,
  reverseGeocodingEndpoint,
} from '../../config/apis';
import { Services } from '../../service';
import {
  forwardGeocodingResponseSchema,
  reverseGeocodingResponseSchema,
} from './schema';
import {
  forwardGeocodingPropsType,
  forwardGeocodingResponseType,
  reverseGeocodingPropsType,
  reverseGeocodingResponseType,
} from './type';

export * from './type';
export class GeocodeService extends Services {
  forwardGeocoding = async ({
    key,
    token,
  }: forwardGeocodingPropsType): Promise<forwardGeocodingResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        const response = await this.fetchApi<
          typeof forwardGeocodingResponseSchema,
          forwardGeocodingResponseType
        >({
          method: 'GET',
          url: forwardGeocodingEndpoint,
          params: {
            search: key,
          },
          schema: forwardGeocodingResponseSchema,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal: this.abortController.signal,
          transformResponse: (res) => res,
        });
        return response;
      } else {
        throw new Error('Unauthorized');
      }
    } catch (error) {
      throw this.handleError(error);
    }
  };
  reverseGeocoding = async (
    props: reverseGeocodingPropsType
  ): Promise<reverseGeocodingResponseType> => {
    this.abortController = new AbortController();
    try {
      if (props.token) {
        return await this.fetchApi<
          typeof reverseGeocodingResponseSchema,
          reverseGeocodingResponseType
        >({
          method: 'GET',
          url: reverseGeocodingEndpoint,
          params: {
            lat: props.lat,
            lon: props.lon,
          },
          schema: reverseGeocodingResponseSchema,
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
          signal: this.abortController.signal,
          transformResponse: (res) => res,
        });
      } else {
        throw new Error('Unauthorized');
      }
    } catch (error) {
      throw this.handleError(error);
    }
  };
}
