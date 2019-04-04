import { State } from "@domain/types";
import { createSelector } from "reselect";
import { RouteChildrenProps } from "react-router";

export const getProfilesState = (state: State) => state.content.profiles;

export const getProfilesItems = createSelector(
  getProfilesState,
  state => state.items
);

export const getProfiles = createSelector(
  getProfilesState,
  ({ items }) => items.idList.map(id => items.byId[id])
);

export const getProfileFromRoute = <
  T extends RouteChildrenProps<{ username: string }>
>(
  state: State,
  ownProps: T
) => {
  const username = ownProps.match && ownProps.match.params.username;

  if (username) {
    return (
      state.content.profiles.detail.value ||
      getProfilesItems(state).byId[username]
    );
  }
  return;
};
