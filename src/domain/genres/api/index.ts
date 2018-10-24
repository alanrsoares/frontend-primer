import { ENDPOINTS } from "@domain/core";
import { Genre } from "@domain/genres/types";
import { get } from "@helpers/api";

export const fetchGenres = get<void, Genre[]>(ENDPOINTS.genres);

export const fetchDetail = get<string, Genre>(ENDPOINTS.genres, {
  transformEndpoint: (id, endpoint) => `${endpoint}/${id}`
});
