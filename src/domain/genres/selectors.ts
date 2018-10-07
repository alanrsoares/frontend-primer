import { State } from "@domain";

export const getGenres = (state: State) =>
  state.genres.idList.map(id => state.genres.byId[id]);
