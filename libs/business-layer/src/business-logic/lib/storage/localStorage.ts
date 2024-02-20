/**
 * Check if local storage is available.
 * @returns True if local storage is available, false otherwise.
 */
function isLocalStorageAvailable(): boolean {
  return (
    typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
  );
}

/**
 * Get an item from local storage if available.
 * @param key The key of the item to get.
 * @returns The value associated with the given key, or null if the key does not exist or if localStorage is not available.
 */
export function getLocalStorageItem(key: string): string | null {
  try {
    if (!isLocalStorageAvailable()) {
      return null;
    }
    return window.localStorage.getItem(key);
  } catch (error) {
    console.error(
      `Error getting item from local storage with key ${key}:`,
      error
    );
    return null;
  }
}

/**
 * Set an item in local storage if available.
 * @param key The key under which to store the value.
 * @param value The value to store.
 */
export function setLocalStorageItem(key: string, value: string): void {
  try {
    if (!isLocalStorageAvailable()) {
      return;
    }
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.error(
      `Error setting item in local storage with key ${key}:`,
      error
    );
  }
}

/**
 * Remove an item from local storage if available.
 * @param key The key of the item to remove.
 */
export function removeLocalStorageItem(key: string): void {
  try {
    if (!isLocalStorageAvailable()) {
      return;
    }
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(
      `Error removing item from local storage with key ${key}:`,
      error
    );
  }
}

export const localStorageController = {
  getter: getLocalStorageItem,
  setter: setLocalStorageItem,
  remover: removeLocalStorageItem,
};
