import { State } from "@domain/types";
import { createSelector } from "reselect";

const getItems = (state: State) => state.genres.items;

export const getGenres = createSelector(
  getItems,
  items => items.idList.map(id => items.byId[id])
);
