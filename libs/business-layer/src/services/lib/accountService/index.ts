import {
  getFreelancerDetailEndpoint,
  getFreelancerPreviewDataEndpoint,
} from '../../config/apis';
import { Services } from '../../service';
import {
  getFreelancerDetailResponseSchema,
  getFreelancerPreviewDataResponseSchema,
} from './schema';
import {
  getFreelancerDetailPropsType,
  getFreelancerPreviewDataPropsType,
  getFreelancerPreviewDataResponseType,
  getFreelancerDetailResponseType,
} from './type';

export * from './type';
export class AccountService extends Services {
  getFreelancerPreviewData = async ({
    token,
  }: getFreelancerPreviewDataPropsType): Promise<getFreelancerPreviewDataResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        return await this.fetchApi<
          typeof getFreelancerPreviewDataResponseSchema,
          getFreelancerPreviewDataResponseType
        >({
          method: 'GET',
          url: getFreelancerPreviewDataEndpoint,
          schema: getFreelancerPreviewDataResponseSchema,
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
  getFreelancerDetail = async ({
    token,
  }: getFreelancerDetailPropsType): Promise<getFreelancerDetailResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        return await this.fetchApi<
          typeof getFreelancerDetailResponseSchema,
          getFreelancerDetailResponseType
        >({
          method: 'GET',
          url: getFreelancerDetailEndpoint,
          schema: getFreelancerDetailResponseSchema,
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
