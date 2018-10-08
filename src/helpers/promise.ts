export const delay = <T>(timeout: number, getValue: () => T) => {
  return new Promise<T>(resolve => {
    setTimeout(() => resolve(getValue()), timeout);
  });
};
