import { generateSecureHash } from './hash';

export const getCustomAccessTokenKey = (hostname: string) =>
  generateSecureHash('token' + hostname);
