import { LazyCollection } from "@domain/core";

export interface Movie {
  id: string;
  title: string;
  country: string;
  director: string;
  year: number;
  score: number;
}

export type State = LazyCollection<Movie>;
