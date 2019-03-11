import { State } from "@domain/types";

export const getGenres = (state: State) =>
  state.genres.idList.map(id => state.genres.byId[id]);
