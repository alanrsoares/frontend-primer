import { LazyCollection } from "@domain/core/types";

export interface Genre {
  id: string;
  name: string;
}

export type State = LazyCollection<Genre>;
