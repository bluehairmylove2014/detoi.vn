import Cookies from 'js-cookie';

/**
 * Get the value of a cookie by its name.
 * @param name The name of the cookie.
 * @returns A Promise that resolves with the value of the cookie, or null if the cookie does not exist.
 */
export function getCookie(name: string): string | null {
  try {
    return Cookies.get(name) || null;
  } catch (error) {
    console.error(`Error getting cookie with name ${name}:`, error);
    return null;
  }
}

/**
 * Set the value of a cookie.
 * @param name The name of the cookie.
 * @param value The value to set for the cookie.
 * @param options Optional options for the cookie.
 */
export function setCookie(
  name: string,
  value: string,
  options?: Cookies.CookieAttributes
): void {
  try {
    Cookies.set(name, value, options);
  } catch (error) {
    console.error(`Error setting cookie with name ${name}:`, error);
  }
}

/**
 * Remove a cookie by its name.
 * @param name The name of the cookie to remove.
 * @param options Optional options for the cookie.
 */
export function removeCookie(
  name: string,
  options?: Cookies.CookieAttributes
): void {
  try {
    Cookies.remove(name, options);
  } catch (error) {
    console.error(`Error removing cookie with name ${name}:`, error);
  }
}
