export const convertToSnakeCase = (data: Record<string, any>) => {
  return Object.keys(data).reduce((acc, key) => {
    const snakeKey = key.replace(
      /[A-Z]/g,
      (match) => `_${match.toLowerCase()}`
    );
    acc[snakeKey] = data[key];
    return acc;
  }, {} as Record<string, any>);
};
