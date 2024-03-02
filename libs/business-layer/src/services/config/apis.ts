// PROXY_URL
const workerUrl = 'https://ura-ads.phucdat4102.workers.dev';
const corsProxyUrl = workerUrl + '/cors-proxy/';

// AUTH
export const loginEndpoint = '/api/v1/auth/login/customer';
export const verifyOtpEndpoint = '/api/v1/auth/verify-otp/register-login';
export const resendOtpEndpoint = '/api/v1/auth/resend-otp/register-login';
export const refreshTokenEndpoint = '/api/auth/refresh-token';

// SERVICE & CATEGORY
export const getAllCategoryEndpoint = '/api/v1/service-category';
export const getCategoryDetailEndpoint = '/api/v1/service-category/detail';

// GEOCODE
export const forwardGeocodingEndpoint = '/api/v1/geo-code/forward';
export const reverseGeocodingEndpoint = '/api/v1/geo-code/reverse';

// BOOKING
export const serviceBookingEndpoint = '/api/v1/';

// SIRV
export const sirvBaseUrlTemplate = 'https://api.sirv.com/v2';
export const connectSirvUrl = sirvBaseUrlTemplate + '/token';
export const uploadImageUrl = sirvBaseUrlTemplate + '/files/upload';
export const deleteImageUrl = sirvBaseUrlTemplate + '/files/delete';

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
