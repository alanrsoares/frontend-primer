import { get } from "@lib/apiClient";

import { Paginated } from "@lib/types";
import { ENDPOINTS } from "@domain/core";
import { Genre } from "@domain/genres/types";

export const fetchGenres = get<void, Paginated<Genre[]>>(ENDPOINTS.genres);

export const fetchDetail = get<string, Genre>(ENDPOINTS.genres, {
  transformEndpoint: (id, endpoint) => `${endpoint}/${id}`
});
