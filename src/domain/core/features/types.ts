import { AsyncCollection } from "@lib/types";

export type FeaturesState = AsyncCollection<Feature>;

export enum Features {
  movies = "movies"
}

export interface Feature {
  id: Features;
  isEnabled: boolean;
}
