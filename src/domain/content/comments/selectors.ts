import { createSelector } from "reselect";

import { State } from "@domain/types";

export const getCommentsState = (state: State) => state.content.comments;

export const getComments = createSelector(
  getCommentsState,
  ({ idList, byId }) => idList.map(id => byId[id])
);
