import { get } from "@lib/apiClient";

import { PaginatedResult } from "@lib/types";

import { ENDPOINTS } from "@domain/core";
import { Movie } from "@domain/movies/types";

export const fetchMovies = get<void, PaginatedResult<Movie[]>>(
  ENDPOINTS.movies
);

export const fetchDetail = get<string, Movie>(ENDPOINTS.movies, {
  transformEndpoint: (id, endpoint) => `${endpoint}/${id}`
});
