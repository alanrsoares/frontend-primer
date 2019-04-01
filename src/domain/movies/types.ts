import { AsyncCollection, Paginated } from "@lib/types";

export type MoviesState = Paginated<AsyncCollection<Movie>>;

export interface Movie {
  id: string;
  title: string;
  country: string;
  director: string;
  year: number;
  score: number;
}
