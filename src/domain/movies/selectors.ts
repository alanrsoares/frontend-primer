import { State } from "@domain/types";
import { createSelector } from "reselect";

const getItems = (state: State) => state.movies.items;

export const getMovies = createSelector(
  getItems,
  items => items.idList.map(id => items.byId[id])
);
