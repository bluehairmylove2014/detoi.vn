import { Services } from '@business-layer/services/service';
import {
  getAllCategoryResponseSchema,
  getAllServicesOfCategoryResponseSchema,
} from './schema';
import {
  getAllCategoryPropsType,
  getAllCategoryResponseType,
  getAllServicesOfCategoryPropsType,
  getAllServicesOfCategoryResponseType,
} from './type';
import {
  getAllCategoryEndpoint,
  getAllServicesOfCategoryEndpoint,
} from '@business-layer/services/config/apis';

const UNAUTHORIZED_MESSAGE = 'Unauthorized';

export * from './type';
export class CategoryService extends Services {
  getAllCategory = async ({
    token,
  }: getAllCategoryPropsType): Promise<getAllCategoryResponseType> => {
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
    categoryId,
    token,
  }: getAllServicesOfCategoryPropsType): Promise<getAllServicesOfCategoryResponseType> => {
    this.abortController = new AbortController();
    try {
      if (!token) {
        throw new Error(UNAUTHORIZED_MESSAGE);
      } else {
        return await this.fetchApi<
          typeof getAllServicesOfCategoryResponseSchema,
          getAllServicesOfCategoryResponseType
        >({
          method: 'GET',
          url: getAllServicesOfCategoryEndpoint,
          schema: getAllServicesOfCategoryResponseSchema,
          params: {
            id: categoryId,
          },
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
