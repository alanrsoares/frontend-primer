import { get } from "@lib/apiClient";

import { PaginatedResult } from "@lib/types";
import { ENDPOINTS } from "@domain/core";
import { Genre } from "@domain/genres/types";

export const fetchGenres = get<void, PaginatedResult<Genre[]>>(
  ENDPOINTS.genres
);

export const fetchDetail = get<string, Genre>(ENDPOINTS.genres, {
  transformEndpoint: (id, endpoint) => `${endpoint}/${id}`
});
