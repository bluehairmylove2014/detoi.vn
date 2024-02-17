import { AxiosResponse } from 'axios';
import { fCaptchaSiteverifyUrl } from '../../config/apis';
import { getAxiosNormalInstance } from '../../config/axios';
import { Services } from '../../service';
import { fCaptchaVerifySolutionResponseType } from './type';

const sitekey = process.env.NEXT_PUBLIC_FRIENDLY_SITE_KEY;
const secret = process.env.NEXT_PUBLIC_FRIENDLY_CAPTCHA_KEY;

export class FCaptchaService extends Services {
  verifySolution = async (
    solution: string
  ): Promise<fCaptchaVerifySolutionResponseType> => {
    this.abortController = new AbortController();
    try {
      const response: AxiosResponse<fCaptchaVerifySolutionResponseType> =
        await getAxiosNormalInstance().post(
          fCaptchaSiteverifyUrl,
          {
            solution,
            secret,
            sitekey,
          },
          {
            signal: this.abortController.signal,
          }
        );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  };
}
