import {
  getAccountInfoUrl,
  hqGetAllAccountEndpoint,
  hqUnitModifyAccountEndpoint,
  modifyAccountInfoUrl,
} from '../../config/apis';
import { Services } from '../../service';
import {
  getAccountInfoResponseSchema,
  getAllAccountResponseSchema,
  modifyAccountInfoResponseSchema,
  unitModifyAccountResponseSchema,
} from './schema';
import {
  getAccountInfoResponseType,
  getAllAccountResponseType,
  modifyAccountInfoParamsType,
  modifyAccountInfoResponseType,
  unitModifyAccountParamsType,
  unitModifyAccountResponseType,
} from './type';

export * from './type';
export class AccountService extends Services {
  getAccountInfo = async (
    token: string | null
  ): Promise<getAccountInfoResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        const response = await this.fetchApi<
          typeof getAccountInfoResponseSchema,
          getAccountInfoResponseType
        >({
          method: 'GET',
          url: getAccountInfoUrl,
          schema: getAccountInfoResponseSchema,
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
  modifyAccountInfo = async ({
    data,
    token,
  }: modifyAccountInfoParamsType): Promise<modifyAccountInfoResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        const response = await this.fetchApi<
          typeof modifyAccountInfoResponseSchema,
          modifyAccountInfoResponseType
        >({
          method: 'PUT',
          url: modifyAccountInfoUrl,
          schema: modifyAccountInfoResponseSchema,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data,
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

  getAllAccounts = async (
    token: string | null
  ): Promise<getAllAccountResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        const response = await this.fetchApi<
          typeof getAllAccountResponseSchema,
          getAllAccountResponseType
        >({
          method: 'GET',
          url: hqGetAllAccountEndpoint,
          schema: getAllAccountResponseSchema,
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
  unitModifyAccount = async ({
    data,
    token,
  }: unitModifyAccountParamsType): Promise<unitModifyAccountResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        const response = await this.fetchApi<
          typeof unitModifyAccountResponseSchema,
          unitModifyAccountResponseType
        >({
          method: 'PUT',
          url: hqUnitModifyAccountEndpoint,
          schema: unitModifyAccountResponseSchema,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data,
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
}
