import React, { useEffect } from "react";
import { connectWithActions } from "re-reduced";
import { Link, RouteProps, withRouter } from "react-router-dom";
import qs from "query-string";

import { Routes } from "@domain/core";
import { actions } from "@domain/content";
import { selectors } from "@domain";

import { Article } from "@domain/content/types";
import ArticlePreview from "@ui/components/ArticlePreview";

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

type FeedKind = "global" | "private";

interface Props extends RouteProps {
  actions: typeof actions;
  isAuthenticated: boolean;
  articles: Article[];
}

export function Feed(props: Props) {
  useEffect(() => {
    props.actions.articles.fetch({ limit: 10, offset: 0 });
  }, []);
  const query = props.location && qs.parse(props.location.search);
  const selectedFeed: FeedKind =
    query && query.feed
      ? (query.feed as FeedKind)
      : props.isAuthenticated
      ? "private"
      : "global";

  const handleFavorite = () => {};

  return (
    <>
      <FeedToggle>
        <Tab
          label="Your Feed"
          feed="private"
          disabled={!props.isAuthenticated}
          active={selectedFeed === "private"}
        />
        <Tab
          label="Global Feed"
          feed="global"
          active={selectedFeed === "global"}
        />
      </FeedToggle>
      <>
        {props.articles.map(article => (
          <ArticlePreview
            key={article.slug}
            onFavorite={handleFavorite}
            {...article}
          />
        ))}
      </>
    </>
  );
}

const enhance = connectWithActions<Props>(actions, {
  isAuthenticated: selectors.getUserIsAuthenticated,
  articles: selectors.getArticles
});

export default withRouter(enhance(Feed));
