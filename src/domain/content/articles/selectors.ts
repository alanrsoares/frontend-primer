import { State } from "@domain/types";
import { createSelector } from "reselect";
import { RouteChildrenProps } from "react-router";

export const getArticlesState = (state: State) => state.content.articles;

export const getArticles = createSelector(
  getArticlesState,
  ({ items }) => items.idList.map(id => items.byId[id])
);

export const getArticleFromRoute = <
  T extends RouteChildrenProps<{ slug: string }>
>(
  state: State,
  ownProps: T
) => {
  const slug = ownProps.match && ownProps.match.params.slug;
  if (slug) {
    return getArticlesState(state).items.byId[slug];
  }
  return;
};
