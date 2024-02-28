import { Services } from '@business-layer/services/service';
import { getAllCategoryResponseSchema } from './schema';
import { getAllCategoryParamsType, getAllCategoryResponseType } from './type';
import { getAllCategoryEndpoint } from '@business-layer/services/config/apis';

const UNAUTHORIZED_MESSAGE = 'Unauthorized';

export * from './type';
export class CategoryService extends Services {
  getAllCategory = async ({
    token,
  }: getAllCategoryParamsType): Promise<getAllCategoryResponseType> => {
    this.abortController = new AbortController();
    try {
      if (!token) {
        throw new Error(UNAUTHORIZED_MESSAGE);
      } else {
        return await this.fetchApi<
          typeof getAllCategoryResponseSchema,
          getAllCategoryResponseType
        >({
          method: 'GET',
          url: getAllCategoryEndpoint,
          schema: getAllCategoryResponseSchema,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal: this.abortController.signal,
          transformResponse: (res) => res,
        });
      }
    } catch (error) {
      throw this.handleError(error);
    }
  };
  getAllServicesOfCategory = async ({
    token,
  }: getAllCategoryParamsType): Promise<getAllCategoryResponseType> => {
    this.abortController = new AbortController();
    try {
      if (!token) {
        throw new Error(UNAUTHORIZED_MESSAGE);
      } else {
        return await this.fetchApi<
          typeof getAllCategoryResponseSchema,
          getAllCategoryResponseType
        >({
          method: 'GET',
          url: getAllCategoryEndpoint,
          schema: getAllCategoryResponseSchema,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal: this.abortController.signal,
          transformResponse: (res) => res,
        });
      }
    } catch (error) {
      throw this.handleError(error);
    }
  };
}
