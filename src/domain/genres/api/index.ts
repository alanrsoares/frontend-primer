import { delay } from "@helpers/promise";

import * as mocks from "./__mocks__";

export const fetchGenres = async () => await delay(2000, () => mocks.genres);

export const fetchDetail = async (id: string) =>
  await delay(1000, () => mocks.genres[id]);
