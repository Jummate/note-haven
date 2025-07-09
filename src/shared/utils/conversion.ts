export const convertToSnakeCase = <T extends Record<string, unknown>>(
  data: T,
): Record<string, unknown> => {
  return Object.keys(data).reduce(
    (acc, key) => {
      const snakeKey = key.replace(
        /[A-Z]/g,
        match => `_${match.toLowerCase()}`,
      );
      acc[snakeKey] = data[key as keyof T];
      return acc;
    },
    {} as Record<string, unknown>,
  );
};
