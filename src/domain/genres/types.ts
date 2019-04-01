import { AsyncCollection, PaginatedResult } from "@lib/types";

export interface Genre {
  id: string;
  name: string;
}

export type GenresState = PaginatedResult<AsyncCollection<Genre>>;
