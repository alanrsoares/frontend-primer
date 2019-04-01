import { AsyncCollection, PaginatedResult } from "@lib/types";

export type MoviesState = PaginatedResult<AsyncCollection<Movie>>;

export interface Movie {
  id: string;
  title: string;
  country: string;
  director: string;
  year: number;
  score: number;
}
