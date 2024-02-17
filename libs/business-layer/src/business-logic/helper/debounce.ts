type flexFunctionType<T, U> = (args: U) => Promise<T>;
let timer: NodeJS.Timeout | null = null;
export const debouncePromise = <T, U>(
  func: flexFunctionType<T, U>,
  timeout: number
) => {
  return (args: U) =>
    new Promise<T>((resolve, reject) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        timer = null;
        func(args)
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      }, timeout);
    });
};
let normalTimer: NodeJS.Timeout | null = null;
export const debounce = (func: (args: any) => void, timeout: number) => {
  return (args: any) => {
    if (normalTimer) {
      clearTimeout(normalTimer);
    }

    normalTimer = setTimeout(() => {
      normalTimer = null;
      func(args);
    }, timeout);
  };
};
