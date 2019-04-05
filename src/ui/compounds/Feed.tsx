import React, { useEffect, useCallback } from "react";
import { connectWithActions } from "re-reduced";
import { RouteChildrenProps } from "react-router";
import { Link, withRouter } from "react-router-dom";

import qs from "query-string";

import { PaginationState } from "@lib/types";
import { selectors } from "@domain";

import { Routes } from "@domain/core";
import { actions } from "@domain/content";

import { Article } from "@domain/content/types";
import ArticlePreview from "@ui/components/ArticlePreview";

import Pagination from "./Pagination";

const Tab = (props: {
  label: string;
  feed: FeedKind;
  disabled?: boolean;
  active?: boolean;
}) => (
  <li className="nav-item">
    <Link
      to={
        !props.disabled
          ? `${Routes.home}?${qs.stringify({ feed: props.feed })}`
          : ``
      }
      className={`nav-link ${props.disabled && "disabled"} ${props.active &&
        "active"}`}
      onClick={e => {
        if (props.disabled) {
          return e.preventDefault();
        }
      }}
    >
      {props.label}
    </Link>
  </li>
);

const FeedToggle = (props: { children: React.ReactNodeArray }) => (
  <div className="feed-toggle">
    <ul className="nav nav-pills outline-active">{props.children}</ul>
  </div>
);

type FeedKind = "global" | "private" | "tag";

interface QueryState {
  tag?: string;
  pageIndex?: string;
  feed?: FeedKind;
}

const getActiveFeed = (
  query: QueryState,
  isAuthenticated: boolean
): FeedKind => {
  if (query.tag) {
    return "tag";
  }
  if (query.feed) {
    return query.feed;
  }

  return isAuthenticated ? "private" : "global";
};

interface Props extends RouteChildrenProps {
  actions: typeof actions;
  isAuthenticated: boolean;
  articles: Article[];
  pagination: PaginationState;
}

export function Feed(props: Props) {
  const getQuery = useCallback(() => {
    const queryString = props.location && qs.parse(props.location.search);
    return (queryString || {}) as QueryState;
  }, [props.location]);

  useEffect(() => {
    const pageSize = 10;
    const queryState = getQuery();
    const pageIndex = queryState.pageIndex ? Number(queryState.pageIndex) : 1;

    props.actions.articles.fetch({
      limit: pageSize,
      offset: (pageIndex - 1) * pageSize,
      tag: queryState.tag
    });
  }, [props.location]);

  const handleFavorite = useCallback(() => {
    console.log("fav");
  }, []);

  const query = getQuery();
  const activeFeed = getActiveFeed(query, props.isAuthenticated);

  return (
    <>
      <FeedToggle>
        {props.isAuthenticated && (
          <Tab
            label="Your Feed"
            feed="private"
            disabled={!props.isAuthenticated}
            active={activeFeed === "private"}
          />
        )}
        <Tab
          label="Global Feed"
          feed="global"
          active={activeFeed === "global"}
        />
        {query.tag && (
          <Tab
            label={`#${query.tag}`}
            feed="global"
            active={activeFeed === "tag"}
          />
        )}
      </FeedToggle>

      <div style={{ padding: "0 10px" }}>
        {props.articles.map(article => (
          <ArticlePreview
            key={article.slug}
            onFavorite={handleFavorite}
            {...article}
          />
        ))}
        <Pagination {...props.pagination} />
      </div>
    </>
  );
}

const enhance = connectWithActions<Props>(actions, {
  isAuthenticated: selectors.getUserIsAuthenticated,
  articles: selectors.getArticles,
  pagination: selectors.getArticlesPagination
});

export default withRouter(enhance(Feed));
