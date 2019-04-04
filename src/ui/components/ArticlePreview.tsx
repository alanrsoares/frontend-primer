import React from "react";
import { Article } from "@domain/content/types";
import { Link } from "react-router-dom";
import { Routes } from "@domain/core";

function HeartButton(props: { count: number; onClick(): void }) {
  return (
    <button
      className="btn btn-outline-primary btn-sm pull-xs-right"
      onClick={props.onClick}
    >
      <i className="ion-heart" /> {props.count}
    </button>
  );
}

interface Props extends Article {
  onFavorite(slug: string): void;
}

export default function ArticlePreview(props: Props) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={Routes.profile(props.author.username)}>
          <img src={props.author.image} />
        </Link>
        <div className="info">
          <Link to={Routes.profile(props.author.username)} className="author">
            {props.author.username}
          </Link>
          <span className="date">
            {new Date(props.createdAt).toDateString()}
          </span>
        </div>
        <HeartButton
          onClick={() => props.onFavorite(props.slug)}
          count={props.favoritesCount}
        />
      </div>
      <Link to={Routes.article(props.slug)} className="preview-link">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {props.tagList.map(tag => {
            return (
              <li className="tag-default tag-pill tag-outline" key={tag}>
                {tag}
              </li>
            );
          })}
        </ul>
      </Link>
    </div>
  );
}
