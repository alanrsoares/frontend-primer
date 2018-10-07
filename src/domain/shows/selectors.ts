import { State } from "@domain";

export const getShows = (state: State) =>
  state.shows.idList.map(id => state.shows.byId[id]);
