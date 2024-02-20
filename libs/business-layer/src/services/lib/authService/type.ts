import { IAccount } from '../../entities';

export type loginParamsType = Pick<IAccount, 'phone'>;
export type loginResponseType = {
  message: string;
};
export type verifyOtpParamsType = Pick<IAccount, 'phone'> & {
  otp: string;
};
export type verifyOtpResponseType = {
  message: string;
  token: string;
  refreshToken: string;
};

// OLD
export type registerDataType = {
  fullName: string;
  password: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  role: string;
  unitUnderManagement: string;
};
export type registerParamsType = {
  data: registerDataType;
  token: string;
};
export type registerResponseType = {
  message: string;
};

export type refreshTokenResponseType = {
  message: string;
  token: string;
};

// Change password
export type messageResponseType = {
  message: string;
};
export type changePasswordParamsType = {
  data: {
    oldPassword: string;
    password: string;
  };
  token: string | null;
};
// Forgot password
export type forgotPasswordParamsType = {
  email: string;
};
export type resetPasswordParamsType = {
  email: string;
  password: string;
};
