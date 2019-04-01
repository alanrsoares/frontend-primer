import { AsyncCollection, Paginated } from "@lib/types";

export interface Genre {
  id: string;
  name: string;
}

export type GenresState = Paginated<AsyncCollection<Genre>>;
