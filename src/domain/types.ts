import { CoreState } from "./core/types";
import { GenresState } from "./genres/types";
import { MoviesState } from "./movies/types";

export * from "./core/types";
export * from "./genres/types";
export * from "./movies/types";

export interface State {
  core: CoreState;
  genres: GenresState;
  movies: MoviesState;
}
