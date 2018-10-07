import { State as Core } from "@src/domain/core";
import { State as Genres } from "@src/domain/genres";
import { State as Movies } from "@src/domain/movies";
import { State as Shows } from "@src/domain/shows";

export interface State {
  core: Core;
  genres: Genres;
  movies: Movies;
  shows: Shows;
}
