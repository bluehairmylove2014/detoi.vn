import { LOCAL_STORAGE_KEYS } from '@business-layer/business-logic/configs/constants';
import { getWindowInstance } from './windowHelper';

export function setEmail(email: string): void {
  const windowInstance = getWindowInstance();
  if (!windowInstance) return;
  windowInstance.localStorage.setItem(
    LOCAL_STORAGE_KEYS.FORGOT_PSW_EMAIL,
    email
  );
}

export function getEmail(): string | null {
  const windowInstance = getWindowInstance();
  return windowInstance
    ? windowInstance.localStorage.getItem(LOCAL_STORAGE_KEYS.FORGOT_PSW_EMAIL)
    : null;
}

export function deleteEmail(): void {
  const windowInstance = getWindowInstance();
  if (!windowInstance) return;
  windowInstance.localStorage.removeItem(LOCAL_STORAGE_KEYS.FORGOT_PSW_EMAIL);
}
