import { AxiosResponse } from 'axios';
import {
  facebookGetFBAccessTokenUrl,
  facebookGetFBUserInfoUrl,
  githubGetAccessTokenUrl,
  githubGetUserInfoUrl,
  googleGetUserInfoUrl,
  googleValidateTokenUrl,
  updateAccountUrl,
} from '../../config/apis';
import { getAxiosNormalInstance } from '../../config/axios';
import { Services } from '../../service';
import { updateAccountResponseSchema } from './schema';
import {
  getFBAccessTokenParamsType,
  getFBAccessTokenResponseType,
  getFBUserInfoResponseType,
  getGithubAccessTokenParamsType,
  getGithubAccessTokenResponseType,
  getGithubUserInfoResponseType,
  getUserInfoResponseType,
  googleGetUserInfoResponseType,
  googleValidateTokenResponseType,
  tokenType,
  updateAccountParamsType,
  updateAccountResponseType,
  validateTokenResponseType,
} from './type';

export class SocialService extends Services {
  updateAccount = async (
    data: updateAccountParamsType
  ): Promise<updateAccountResponseType> => {
    this.abortController = new AbortController();
    try {
      const response = await this.fetchApi<
        typeof updateAccountResponseSchema,
        updateAccountResponseType
      >({
        method: 'POST',
        url: updateAccountUrl,
        schema: updateAccountResponseSchema,
        data,
        signal: this.abortController.signal,
        transformResponse: (res) => res,
      });
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  };

  // GOOGLE LOGIN
  validateToken = async (token: string): Promise<validateTokenResponseType> => {
    this.abortController = new AbortController();
    try {
      const response: AxiosResponse<googleValidateTokenResponseType> =
        await getAxiosNormalInstance().get(
          googleValidateTokenUrl + `?access_token=${token}`,
          {
            signal: this.abortController.signal,
          }
        );
      if (response.status === 200) {
        // Token is valid
        return {
          email: response.data.email,
          email_verified: response.data.email_verified,
          expires_in: response.data.expires_in,
        };
      } else {
        throw new Error('Error validate token response.status not valid');
      }
    } catch (error) {
      throw this.handleError(error);
    }
  };
  getAccountInfo = async (token: string): Promise<getUserInfoResponseType> => {
    this.abortController = new AbortController();
    try {
      const response: AxiosResponse<googleGetUserInfoResponseType> =
        await getAxiosNormalInstance().get(googleGetUserInfoUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal: this.abortController.signal,
        });
      if (response.status === 200) {
        const userProfile = response.data;
        return {
          email: userProfile.emailAddresses[0].value,
          firstName: userProfile.names[0].familyName,
          lastName: userProfile.names[0].givenName,
        };
      } else {
        throw new Error('Error fetching user profile');
      }
    } catch (error) {
      throw this.handleError(error);
    }
  };

  // FACEBOOK LOGIN
  getFBAccessToken = async (
    params: getFBAccessTokenParamsType
  ): Promise<getFBAccessTokenResponseType> => {
    this.abortController = new AbortController();
    try {
      const response: AxiosResponse<getFBAccessTokenResponseType> =
        await getAxiosNormalInstance().get(
          facebookGetFBAccessTokenUrl +
            `?client_id=${params.clientId}` +
            `&client_secret=${params.clientSecret}` +
            `&redirect_uri=${params.redirectUri}` +
            `&code=${params.code}`,
          {
            signal: this.abortController.signal,
          }
        );
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Error fetching access token');
      }
    } catch (error) {
      throw this.handleError(error);
    }
  };
  getFBUserInfo = async (
    token: tokenType
  ): Promise<getUserInfoResponseType> => {
    this.abortController = new AbortController();
    try {
      const response: AxiosResponse<getFBUserInfoResponseType> =
        await getAxiosNormalInstance().get(
          facebookGetFBUserInfoUrl + `&access_token=${token}`,
          {
            signal: this.abortController.signal,
          }
        );
      if (response.status === 200) {
        // Token is valid
        return {
          email: response.data.email,
          firstName: response.data.first_name,
          lastName: response.data.last_name,
        };
      } else {
        throw new Error('Error get facebook user infor response.status');
      }
    } catch (error) {
      throw this.handleError(error);
    }
  };

  // GITHUB LOGIN
  getGithubAccessToken = async (
    params: getGithubAccessTokenParamsType
  ): Promise<getGithubAccessTokenResponseType> => {
    this.abortController = new AbortController();
    try {
      const response: AxiosResponse<string> =
        await getAxiosNormalInstance().post(
          githubGetAccessTokenUrl +
            `?client_id=${params.clientId}` +
            `&client_secret=${params.clientSecret}` +
            `&redirect_uri=${params.redirectUri}` +
            `&code=${params.code}`,
          {
            signal: this.abortController.signal,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

      const dataInObj = response.data.split('&').reduce((acc: any, pair) => {
        const [key, value] = pair.split('=');
        acc[key] = decodeURIComponent(value);
        return acc;
      }, {});

      if (!dataInObj.access_token) {
        throw new Error(dataInObj.error);
      } else {
        return dataInObj;
      }
    } catch (error) {
      throw this.handleError(error);
    }
  };
  getGithubUserInfo = async (
    token: tokenType
  ): Promise<getGithubUserInfoResponseType> => {
    this.abortController = new AbortController();
    try {
      const response: AxiosResponse<any> = await getAxiosNormalInstance().get(
        githubGetUserInfoUrl,
        {
          signal: this.abortController.signal,
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      return {
        avatar_url: response.data.avatar_url,
        email: response.data.email,
        login: response.data.login,
        name: response.data.name,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  };
}
