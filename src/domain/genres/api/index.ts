import { get } from "@lib/apiClient";

import { PaginatedResult, PaginationQuery } from "@lib/types";
import { ENDPOINTS } from "@domain/core";
import { Genre } from "@domain/genres/types";

export const fetchGenres = get<PaginatedResult<Genre[]>, PaginationQuery>(
  ENDPOINTS.genres
);

export const fetchDetail = get<Genre, string>(ENDPOINTS.genres, {
  transformEndpoint: (id, endpoint) => `${endpoint}/${id}`
});
