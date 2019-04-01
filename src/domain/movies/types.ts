import { AsyncCollection } from "@lib/types";

export type MoviesState = AsyncCollection<Movie>;

export interface Movie {
  id: string;
  title: string;
  country: string;
  director: string;
  year: number;
  score: number;
}
