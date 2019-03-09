import { get } from "@lib/apiClient";

import { ENDPOINTS } from "@domain/core";
import { Movie } from "@domain/movies/types";

export const fetchMovies = () => {
  throw new Error("error");
};

export const fetchDetail = get<string, Movie>(ENDPOINTS.movies, {
  transformEndpoint: (id, endpoint) => `${endpoint}/${id}`
});
