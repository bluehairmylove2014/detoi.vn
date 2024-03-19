import {
  createOrderEndpoint,
  getMatchingOrderDetailEndpoint,
} from '../../config/apis';
import { Services } from '../../service';
import {
  createOrderResponseTypeSchema,
  getMatchingOrderDetailResponseSchema,
} from './schema';
import {
  createOrderPropsType,
  createOrderResponseType,
  getMatchingOrderDetailResponseType,
} from './type';

export * from './type';
export class OrderService extends Services {
  createOrder = async ({
    serviceContent,
    serviceKey,
    token,
    ...rest
  }: createOrderPropsType): Promise<createOrderResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        return await this.fetchApi<
          typeof createOrderResponseTypeSchema,
          createOrderResponseType
        >({
          method: 'POST',
          url: createOrderEndpoint,
          data: {
            ...rest,
            [serviceKey]: serviceContent,
          },
          schema: createOrderResponseTypeSchema,
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
  getMatchingOrderDetail = async (
    token: string | null
  ): Promise<getMatchingOrderDetailResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        return await this.fetchApi<
          typeof getMatchingOrderDetailResponseSchema,
          getMatchingOrderDetailResponseType
        >({
          method: 'GET',
          url: getMatchingOrderDetailEndpoint,
          schema: getMatchingOrderDetailResponseSchema,
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
