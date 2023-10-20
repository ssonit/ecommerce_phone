export const LIMIT_PRODUCT = 2;

export function omitByUndefined<T>(obj: T): Partial<T> {
  const result: Partial<T> = {};

  for (const key in obj) {
    if (obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }

  return result;
}

export const createQueryString = (data: Record<string, any>) => {
  const params = new URLSearchParams();

  Object.keys(data).forEach((key) => {
    params.set(key, data[key]);
  });

  return params.toString();
};
