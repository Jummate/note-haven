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

// export const convertToCamelCase = (data: Record<string, any>): any => {
//   if (Array.isArray(data)) {
//     return data.map(convertToCamelCase);
//   } else if (typeof data === 'object' && data !== null) {
//     return Object.entries(data).reduce((acc, [key, value]) => {
//       const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
//       acc[camelKey] = convertToCamelCase(value);
//       return acc;
//     }, {} as Record<string, any>);
//   }
//   return data;
// };

export const convertToCamelCase = (data: unknown): unknown => {
  if (Array.isArray(data)) {
    return data.map(item => convertToCamelCase(item));
  }

  if (typeof data === 'object' && data !== null) {
    return Object.entries(data as Record<string, unknown>).reduce<
      Record<string, unknown>
    >((acc, [key, value]) => {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) =>
        letter.toUpperCase(),
      );
      acc[camelKey] = convertToCamelCase(value);
      return acc;
    }, {});
  }

  return data;
};
