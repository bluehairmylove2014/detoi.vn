import { IAccount } from '../../entities';

export type tokenType = string;
export type validateTokenResponseType = {
  email?: string;
  email_verified?: string;
  expires_in?: string;
};
export type googleValidateTokenResponseType = {
  azp: string;
  aud: string;
  sub: string;
  scope: string; // "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid"
  exp: string; // "1689045290"
  expires_in: string; // "3597"
  email: string; // "abc@gmail.com"
  email_verified: string; // "true"
  access_type: string; // "online"
};
export type updateAccountParamsType = Pick<IAccount, 'email' | 'fullName'>;
export type updateAccountResponseType = {
  message: string;
  token: tokenType;
  refreshToken: tokenType;
};
export type googleGetUserInfoResponseType = {
  names: [
    {
      displayName: string;
      familyName: string;
      givenName: string;
      displayNameLastFirst: string;
      unstructuredName: string;
    }
  ];
  emailAddresses: [
    {
      value: string;
    }
  ];
};

export type getFBAccessTokenParamsType = {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  code: string;
};
export type getFBAccessTokenResponseType = {
  access_token: string;
  token_type: string;
  expires_in: string;
};
export type getFBUserInfoResponseType = {
  email: string;
  first_name: string;
  id: string;
  last_name: string;
};

export type getUserInfoResponseType = {
  email: string;
  firstName: string;
  lastName: string;
};
export type getGithubAccessTokenParamsType = {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  code: string;
};
export type getGithubAccessTokenResponseType = {
  access_token: string;
  scope: string;
  token_type: string;
};
export type getGithubUserInfoResponseType = {
  avatar_url: string;
  email: string | null;
  login: string;
  name: string;
};
