const defaultKey: string = "REDIRECT_URL";
const getRedirectUrl = (customKey?: string): string | null => {
  const key: string = customKey ? customKey : defaultKey;
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(key);
};
const setRedirectUrl = (url: string, customKey?: string): void => {
  const key: string = customKey ? customKey : defaultKey;
  if (typeof window !== "undefined" && typeof url === "string") {
    sessionStorage.setItem(key, url);
  }
};
const deleteRedirectUrl = (customKey?: string): void => {
  const key: string = customKey ? customKey : defaultKey;
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(key);
  }
};

export { getRedirectUrl, setRedirectUrl, deleteRedirectUrl };
