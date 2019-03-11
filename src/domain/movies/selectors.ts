import { State } from "@domain/types";

export const getMovies = (state: State) =>
  state.movies.idList.map(id => state.movies.byId[id]);
