import { LazyCollection } from "@lib/types";

export interface Genre {
  id: string;
  name: string;
}

export type GenresState = LazyCollection<Genre>;
