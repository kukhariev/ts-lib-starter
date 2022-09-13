export const pick = <T, K extends keyof T>(obj: T, whitelist: K[]): Pick<T, K> => {
  const result = {} as Pick<T, K>;
  whitelist.forEach((key) => (result[key] = obj[key]));
  return result;
};
