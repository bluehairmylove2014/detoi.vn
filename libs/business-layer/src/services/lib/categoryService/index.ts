import { Services } from '@business-layer/services/service';
import {
  getAllCategoryResponseSchema,
  getCategoryDetailResponseSchema,
  getServiceDetailResponseSchema,
} from './schema';
import {
  getAllCategoryPropsType,
  getAllCategoryResponseType,
  getCategoryDetailPropsType,
  getCategoryDetailResponseType,
  getServiceDetailPropsType,
  getServiceDetailResponseType,
} from './type';
import {
  getAllCategoryEndpoint,
  getCategoryDetailEndpoint,
  getServiceDetailEndpoint,
} from '@business-layer/services/config/apis';

const UNAUTHORIZED_MESSAGE = 'Unauthorized';

export * from './type';
export class CategoryService extends Services {
  getAllCategory = async (): Promise<getAllCategoryResponseType> => {
    this.abortController = new AbortController();
    try {
      return await this.fetchApi<
        typeof getAllCategoryResponseSchema,
        getAllCategoryResponseType
      >({
        method: 'GET',
        url: getAllCategoryEndpoint,
        schema: getAllCategoryResponseSchema,
        signal: this.abortController.signal,
        transformResponse: (res) => res,
      });
    } catch (error) {
      throw this.handleError(error);
    }
  };
  getCategoryDetail = async ({
    categoryId,
    token,
  }: getCategoryDetailPropsType): Promise<getCategoryDetailResponseType> => {
    this.abortController = new AbortController();
    try {
      if (!token) {
        throw new Error(UNAUTHORIZED_MESSAGE);
      } else {
        return await this.fetchApi<
          typeof getCategoryDetailResponseSchema,
          getCategoryDetailResponseType
        >({
          method: 'GET',
          url: getCategoryDetailEndpoint,
          schema: getCategoryDetailResponseSchema,
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
  getServiceDetail = async ({
    serviceId,
    token,
  }: getServiceDetailPropsType): Promise<getServiceDetailResponseType> => {
    this.abortController = new AbortController();
    try {
      if (!token) {
        throw new Error(UNAUTHORIZED_MESSAGE);
      } else {
        return await this.fetchApi<
          typeof getServiceDetailResponseSchema,
          getServiceDetailResponseType
        >({
          method: 'GET',
          url: getServiceDetailEndpoint,
          schema: getServiceDetailResponseSchema,
          params: {
            id: serviceId,
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
