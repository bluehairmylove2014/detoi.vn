export const getRedirectUri = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return '';
};
