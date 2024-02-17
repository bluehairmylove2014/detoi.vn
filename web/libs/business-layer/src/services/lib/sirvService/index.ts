import {
  connectSirvUrl,
  sirvBaseUrlTemplate,
  uploadImageUrl,
} from '@business-layer/services/config/apis';
import { Services } from '@business-layer/services/service';
import axios from 'axios';
import { delay } from 'lodash';
import { uploadParamsType, uploadReturnType } from './type';

const sirvUser = process.env.NEXT_PUBLIC_SIRV_USER || '';
let sirvState = {
  options: {
    method: 'POST',
    url: sirvBaseUrlTemplate + '/token',
    headers: {
      'Content-Type': 'application/json',
    },
  },
  access_token: '',
  expiresIn: 0,
  scope: [],
  tokenExpirationTimestamp: 0,
};

const sirvClientId = process.env.NEXT_PUBLIC_SIRV_CLIENT_ID || '';
const sirvClientSecret = process.env.NEXT_PUBLIC_SIRV_CLIENT_SECRET || '';

export * from './type';
export class SirvService extends Services {
  isConnecting = false;

  connect = async () => {
    try {
      const response = await axios.post(connectSirvUrl, {
        clientId: sirvClientId,
        clientSecret: sirvClientSecret,
      });
      const apiResponse = response.data;

      sirvState = {
        ...sirvState,
        access_token: apiResponse.token,
        scope: apiResponse.scope,
        expiresIn: apiResponse.expiresIn,
        tokenExpirationTimestamp:
          Math.floor(Date.now() / 1000) + apiResponse.expiresIn,
      };
      this.isConnecting = false; // Mark connection as completed
      return apiResponse;
    } catch (error) {
      throw this.handleError(error);
    }
  };

  upload = async ({
    file,
    fileBuffer,
    path,
  }: uploadParamsType): Promise<uploadReturnType> => {
    try {
      // Check if the token has expired
      if (Math.floor(Date.now() / 1000) >= sirvState.tokenExpirationTimestamp) {
        this.isConnecting = true;
        await this.connect(); // Wait for connection to complete
      }
      while (this.isConnecting) {
        await delay(() => {}, 300);
      }
      // eslint-disable-next-line no-unused-vars
      const response = await axios({
        method: 'POST',
        url: uploadImageUrl,
        params: { filename: path },
        headers: {
          'Content-Type': file.type,
          Authorization: `Bearer ${sirvState.access_token}`,
        },
        data: fileBuffer,
      });
      const encodedUrl = path
        .split('/')
        .map((p: string) => encodeURIComponent(p))
        .join('/');
      return {
        path: `https://${sirvUser}.sirv.com${encodedUrl}`,
        type: file.type,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  };
}
