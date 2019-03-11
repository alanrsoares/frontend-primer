import { LazyCollection } from "@lib/types";

export type MoviesState = LazyCollection<Movie>;

export interface Movie {
  id: string;
  title: string;
  country: string;
  director: string;
  year: number;
  score: number;
}
