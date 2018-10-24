import { get } from "@helpers/api";

import { ENDPOINTS } from "@domain/core";
import { Movie } from "@domain/movies/types";

export const fetchMovies = get<void, Movie[]>(ENDPOINTS.movies);

export const fetchDetail = get<string, Movie>(ENDPOINTS.movies, {
  transformEndpoint: (id, endpoint) => `${endpoint}/${id}`
});
