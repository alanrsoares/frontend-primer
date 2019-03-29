import { get } from "@lib/apiClient";

import { ENDPOINTS } from "@domain/core";
import { Genre } from "@domain/genres/types";
import { PaginatedResult } from "@helpers/reducers";

export const fetchGenres = get<void, PaginatedResult<Genre>>(ENDPOINTS.genres);

export const fetchDetail = get<string, Genre>(ENDPOINTS.genres, {
  transformEndpoint: (id, endpoint) => `${endpoint}/${id}`
});
