import { delay } from "@helpers/promise";

import * as mocks from "./__mocks__";

export const fetchGenres = async () => {
  return await delay(2000, () => mocks.fetchGenres);
};

export const fetchDetail = async (id: string) => {
  return await delay(1000, () => mocks.fetchDetail);
};
