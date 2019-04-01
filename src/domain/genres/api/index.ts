import { get } from "@lib/apiClient";

import { ENDPOINTS } from "@domain/core";
import { Genre } from "@domain/genres/types";
import { Paginated } from "@helpers/reducers";

export const fetchGenres = get<void, Paginated<Genre>>(ENDPOINTS.genres);

export const fetchDetail = get<string, Genre>(ENDPOINTS.genres, {
  transformEndpoint: (id, endpoint) => `${endpoint}/${id}`
});
