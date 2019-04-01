import { get } from "@lib/apiClient";

import { PaginatedResult, PaginationQuery } from "@lib/types";

import { ENDPOINTS } from "@domain/core";
import { Movie } from "@domain/movies/types";

export const fetchMovies = get<PaginatedResult<Movie[]>, PaginationQuery>(
  ENDPOINTS.movies
);

export const fetchDetail = get<Movie, string>(ENDPOINTS.movies, {
  transformEndpoint: (id, endpoint) => `${endpoint}/${id}`
});
