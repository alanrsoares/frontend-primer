import { LazyCollection } from "@lib/types";

export type FeaturesState = LazyCollection<Feature>;

export enum Features {
  movies = "movies"
}

export interface Feature {
  id: Features;
  isEnabled: boolean;
}
