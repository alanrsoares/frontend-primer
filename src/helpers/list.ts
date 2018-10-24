import { indexBy as _indexBy } from "ramda";

export const indexBy = <T, K extends keyof T>(key: K, list: T[]) =>
  _indexBy(x => x[key].toString(), list);
