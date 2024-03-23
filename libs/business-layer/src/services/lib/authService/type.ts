import { IAccount, IToken } from '../../entities';

export type roles = 'customer' | 'freelancer';
export type loginParamsType = Pick<IAccount, 'phone'> & { role: roles };
export type loginResponseType = {
  message: string;
};
export type verifyOtpParamsType = Pick<IAccount, 'phone'> & {
  otp: string;
};
export type verifyOtpResponseType = {
  message: string;
  token: IToken;
  refreshToken: IToken;
};
export type resendOtpParamsType = Pick<IAccount, 'phone'>;
export type resendOtpResponseType = {
  message: string;
};

// OLD

export type refreshTokenResponseType = {
  message: string;
  token: string;
};
