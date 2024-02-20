/**
 * Check if session storage is available.
 * @returns True if session storage is available, false otherwise.
 */
function isSessionStorageAvailable(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.sessionStorage !== 'undefined'
  );
}
/**
 * Get an item from session storage if available.
 * @param key The key of the item to get.
 * @returns The value associated with the given key, or null if the key does not exist or if sessionStorage is not available.
 */
export function getSessionStorageItem(key: string): string | null {
  try {
    if (!isSessionStorageAvailable()) {
      return null;
    }
    return window.sessionStorage.getItem(key);
  } catch (error) {
    console.error(
      `Error getting item from session storage with key ${key}:`,
      error
    );
    return null;
  }
}

/**
 * Set an item in session storage if available.
 * @param key The key under which to store the value.
 * @param value The value to store.
 */
export function setSessionStorageItem(key: string, value: string): void {
  try {
    if (!isSessionStorageAvailable()) {
      return;
    }
    window.sessionStorage.setItem(key, value);
  } catch (error) {
    console.error(
      `Error setting item in session storage with key ${key}:`,
      error
    );
  }
}

/**
 * Remove an item from session storage if available.
 * @param key The key of the item to remove.
 */
export function removeSessionStorageItem(key: string): void {
  try {
    if (!isSessionStorageAvailable()) {
      return;
    }
    window.sessionStorage.removeItem(key);
  } catch (error) {
    console.error(
      `Error removing item from session storage with key ${key}:`,
      error
    );
  }
}

export const sessionStorageController = {
  getter: getSessionStorageItem,
  setter: setSessionStorageItem,
  remover: removeSessionStorageItem,
};
