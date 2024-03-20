import { ratingOrderEndpoint } from '../../config/apis';
import { Services } from '../../service';
import { ratingOrderResponseTypeSchema } from './schema';
import { ratingOrderPropsType, ratingOrderResponseType } from './type';

export * from './type';
export class RatingService extends Services {
  ratingOrder = async ({
    orderId,
    rating,
    comment,
    token,
  }: ratingOrderPropsType): Promise<ratingOrderResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        return await this.fetchApi<
          typeof ratingOrderResponseTypeSchema,
          ratingOrderResponseType
        >({
          method: 'POST',
          url: ratingOrderEndpoint,
          data: {
            orderId,
            rating,
            comment,
          },
          schema: ratingOrderResponseTypeSchema,
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
