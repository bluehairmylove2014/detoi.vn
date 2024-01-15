import CryptoJS from 'crypto-js';

export const generateSecureHash = (key: string): string => {
  const currentDomain: string =
    typeof window !== 'undefined' ? window.location.hostname : '';
  const combinedString: string = key + currentDomain;

  const hashedString: string = CryptoJS.SHA256(combinedString).toString();
  return hashedString;
};
