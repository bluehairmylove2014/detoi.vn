import Cookies from 'js-cookie';

export function setCookie(name: string, value: string, hours: number): void {
  let expires = undefined;
  if (hours) {
    const date = new Date();
    // hours * 60 * 60 * 1000: convert to milisecond
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    expires = date;
  }
  Cookies.set(name, value, { expires: expires });
}

export function getCookie(name: string): string | null {
  return Cookies.get(name) || null;
}

export function deleteCookie(name: string): void {
  Cookies.remove(name);
}
