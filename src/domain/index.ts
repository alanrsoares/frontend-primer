import { State as Core } from "@domain/core/types";
import { State as Genres } from "@domain/genres/types";

export interface State {
  core: Core;
  genres: Genres;
}
