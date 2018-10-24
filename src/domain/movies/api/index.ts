import { delay } from "@helpers/promise";

import * as mocks from "./__mocks__";

export const fetchMovies = async () => {
  return await delay(2000, () => mocks.movies);
};

export const fetchDetail = async (id: string) => {
  return await delay(1000, () => mocks.movies[id]);
};
