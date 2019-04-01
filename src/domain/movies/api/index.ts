import { get } from "@lib/apiClient";

import { ENDPOINTS } from "@domain/core";
import { Movie } from "@domain/movies/types";
import { Paginated } from "@helpers/reducers";

export const fetchMovies = get<void, Paginated<Movie>>(ENDPOINTS.movies);

export const fetchDetail = get<string, Movie>(ENDPOINTS.movies, {
  transformEndpoint: (id, endpoint) => `${endpoint}/${id}`
});
