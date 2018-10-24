import { delay } from "@helpers/promise";

import * as mocks from "@domain/core/api/__mocks__";

export const fetchFeatures = async () => {
  return await delay(1000, () => mocks.features);
};

export const login = async () => {
  return await delay(1000, () => mocks.userProfile);
};
