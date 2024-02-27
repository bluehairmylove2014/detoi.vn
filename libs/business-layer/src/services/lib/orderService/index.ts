import { serviceBookingEndpoint } from '../../config/apis';
import { Services } from '../../service';
import { serviceBookingResponseTypeSchema } from './schema';
import { serviceBookingPropsType, serviceBookingResponseType } from './type';

export * from './type';
export class OrderService extends Services {
  serviceBooking = async ({
    order,
    token,
  }: serviceBookingPropsType): Promise<serviceBookingResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        return await this.fetchApi<
          typeof serviceBookingResponseTypeSchema,
          serviceBookingResponseType
        >({
          method: 'POST',
          url: serviceBookingEndpoint,
          data: {
            requirementList: order,
          },
          schema: serviceBookingResponseTypeSchema,
          headers: {
            Authorization: `Bearer ${token}`,
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
