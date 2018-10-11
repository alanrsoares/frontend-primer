import { State as Core, actions as coreActions } from "@domain/core";
import { State as Genres, actions as genresActions } from "@domain/genres";

export interface State {
  core: Core;
  genres: Genres;
}

export const actions = {
  core: coreActions,
  genres: genresActions
};

export type Actions = typeof actions;
