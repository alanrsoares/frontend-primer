import { get } from "@lib/apiClient";
import { Result } from "@lib/types";

import { Endpoints } from "@domain/core";

import { TagsResponse } from "./types";

export default {
  fetch: get<TagsResponse, void, void, Result<string[]>>(Endpoints.tags, {
    transformResult: result => ({ items: result.tags })
  })
};
