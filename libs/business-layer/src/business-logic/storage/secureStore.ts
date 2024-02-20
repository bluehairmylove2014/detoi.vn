/**
 * Use for react-native expo only
 */
import * as SecureStore from 'expo-secure-store';

/**
 * Get the value of a key from secure storage.
 * @param key The key of the item to get.
 * @returns The value associated with the given key, or null if the key does not exist.
 */
export async function getSecureStorageItem(
  key: string
): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.error(
      `Error getting item from secure storage with key ${key}:`,
      error
    );
    return null;
  }
}

/**
 * Set the value of a key in secure storage.
 * @param key The key under which to store the value.
 * @param value The value to store.
 */
export async function setSecureStorageItem(
  key: string,
  value: string
): Promise<void> {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.error(
      `Error setting item in secure storage with key ${key}:`,
      error
    );
  }
}

/**
 * Remove a key from secure storage.
 * @param key The key of the item to remove.
 */
export async function removeSecureStorageItem(key: string): Promise<void> {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error(
      `Error removing item from secure storage with key ${key}:`,
      error
    );
  }
}

export const secureStorageController = {
  getter: getSecureStorageItem,
  setter: setSecureStorageItem,
  remover: removeSecureStorageItem,
};
