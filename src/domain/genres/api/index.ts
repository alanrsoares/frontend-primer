import { delay } from "@helpers/promise";

import * as mocks from "./__mocks__";

export const fetchList = async () => {
  await delay(2000, () => mocks.fetchList);
};

export const fetchDetail = async (id: string) => {
  await delay(1000, () => mocks.fetchDetail);
};
