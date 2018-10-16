export const indexBy = <T>(idKey: string, list: T[]) =>
  list.reduce((acc, item) => {
    return {
      ...acc,
      [item[idKey]]: item
    };
  }, {});
