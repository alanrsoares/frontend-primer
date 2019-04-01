import { AsyncCollection } from "@lib/types";

export interface Genre {
  id: string;
  name: string;
}

export type GenresState = AsyncCollection<Genre>;
