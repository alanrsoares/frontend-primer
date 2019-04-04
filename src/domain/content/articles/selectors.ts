import { State } from "@domain/types";
import { createSelector } from "reselect";
import { RouteChildrenProps } from "react-router";
import { prop } from "ramda";

export const getArticlesState = (state: State) => state.content.articles;

export const getArticlesItems = createSelector(
  getArticlesState,
  prop("items")
);

export const getArticlesPagination = createSelector(
  getArticlesState,
  state => state.pagination!
);

export const getArticles = createSelector(
  getArticlesItems,
  ({ idList, byId }) => idList.map(id => byId[id])
);

export const getArticleFromRoute = <
  T extends RouteChildrenProps<{ slug: string }>
>(
  state: State,
  ownProps: T
) => {
  const slug = ownProps.match && ownProps.match.params.slug;

  if (slug) {
    return (
      state.content.articles.detail.value ||
      getArticlesState(state).items.byId[slug]
    );
  }
  return;
};
