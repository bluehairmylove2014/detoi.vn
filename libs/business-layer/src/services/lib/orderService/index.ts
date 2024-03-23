import {
  cancelOrderEndpoint,
  createOrderEndpoint,
  getMatchingOrderDetailEndpoint,
  getOrderDetailEndpoint,
  selectFreelancerForOrderEndpoint,
} from '../../config/apis';
import { Services } from '../../service';
import {
  cancelOrderResponseSchema,
  createOrderResponseTypeSchema,
  getMatchingOrderDetailResponseSchema,
  getOrderDetailResponseSchema,
  selectFreelancerForOrderResponseSchema,
} from './schema';
import {
  cancelOrderPropsType,
  cancelOrderResponseType,
  createOrderPropsType,
  createOrderResponseType,
  getMatchingOrderDetailResponseType,
  getOrderDetailPropsType,
  getOrderDetailResponseType,
  selectFreelancerForOrderPropsType,
  selectFreelancerForOrderResponseType,
} from './type';

export * from './type';
export class OrderService extends Services {
  createOrder = async ({
    token,
    ...data
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
          data,
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
  cancelOrder = async ({
    orderId,
    token,
  }: cancelOrderPropsType): Promise<cancelOrderResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        return await this.fetchApi<
          typeof cancelOrderResponseSchema,
          cancelOrderResponseType
        >({
          method: 'DELETE',
          url: cancelOrderEndpoint,
          params: { orderId },
          schema: cancelOrderResponseSchema,
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
  selectFreelancerForOrder = async ({
    orderId,
    freelancerId,
    actualPrice,
    token,
  }: selectFreelancerForOrderPropsType): Promise<selectFreelancerForOrderResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        return await this.fetchApi<
          typeof selectFreelancerForOrderResponseSchema,
          selectFreelancerForOrderResponseType
        >({
          method: 'PUT',
          url: selectFreelancerForOrderEndpoint,
          data: { orderId, freelancerId, actualPrice },
          schema: selectFreelancerForOrderResponseSchema,
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
  getOrderDetail = async ({
    orderId,
    token,
  }: getOrderDetailPropsType): Promise<getOrderDetailResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        return await this.fetchApi<
          typeof getOrderDetailResponseSchema,
          getOrderDetailResponseType
        >({
          method: 'GET',
          url: getOrderDetailEndpoint,
          schema: getOrderDetailResponseSchema,
          params: { id: orderId },
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
