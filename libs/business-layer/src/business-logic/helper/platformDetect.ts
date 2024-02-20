/**
 * Check if the application is running on React Native.
 * @returns True if running on React Native, false otherwise.
 */
export function isReactNative(): boolean {
  return (
    typeof navigator === 'undefined' &&
    typeof document === 'undefined' &&
    typeof global !== 'undefined'
  );
}

/**
 * Check if the application is running on web.
 * @returns True if running on web, false otherwise.
 */
export function isWeb(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
