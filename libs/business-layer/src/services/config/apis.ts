// PROXY_URL
const workerUrl = 'https://ura-ads.phucdat4102.workers.dev';
const corsProxyUrl = workerUrl + '/cors-proxy/';

// AUTH
export const loginEndpoint = '/api/v1/auth/login';
export const verifyOtpEndpoint = '/api/v1/auth/verify-otp';
export const registerEndpoint = '/api/auth/register';
export const refreshTokenEndpoint = '/api/auth/refresh-token';
export const updateAccountEndpoint = '/api/auth/login-social';

// ACCOUNT
export const hqGetAllAccountEndpoint = '/api/account/all';
export const hqUnitModifyAccountEndpoint = '/api/account/unit-modify';

// USER
export const getAccountInfoEndpoint = '/api/account/info';
export const modifyAccountInfoEndpoint = '/api/account/info';

// SIRV
export const sirvBaseUrlTemplate = 'https://api.sirv.com/v2';
export const connectSirvUrl = sirvBaseUrlTemplate + '/token';
export const uploadImageUrl = sirvBaseUrlTemplate + '/files/upload';
export const deleteImageUrl = sirvBaseUrlTemplate + '/files/delete';

// PASSWORD
export const officerChangePasswordEndpoint = '/api/auth/change-password';
export const officerForgotPasswordEndpoint = '/api/auth/forgot-password';
export const officerResetPasswordEndpoint = '/api/auth/reset-password';

// FCAPTCHA
export const fCaptchaSiteverifyUrl =
  corsProxyUrl + 'https://api.friendlycaptcha.com/api/v1/siteverify';

// GOOGLE
export const googleGetUserInfoUrl =
  corsProxyUrl +
  'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses';
export const googleValidateTokenUrl =
  corsProxyUrl + 'https://www.googleapis.com/oauth2/v3/tokeninfo';
// FACEBOOK
export const facebookGetFBAccessTokenUrl =
  corsProxyUrl + 'https://graph.facebook.com/v17.0/oauth/access_token';
export const facebookGetFBUserInfoUrl =
  corsProxyUrl +
  'https://graph.facebook.com/me?fields=first_name,last_name,email';
// GITHUB
export const githubGetAccessTokenUrl =
  corsProxyUrl + 'https://github.com/login/oauth/access_token';
export const githubValidateTokenUrl =
  corsProxyUrl + 'https://api.github.com/authorizations/';
export const githubGetUserInfoUrl =
  corsProxyUrl + 'https://api.github.com/user';
