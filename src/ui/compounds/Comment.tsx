import React from "react";
import { ArticleComment } from "@domain/content/types";
import { Link } from "react-router-dom";

import { Routes } from "@domain/core";

export default function Comment(props: ArticleComment) {
  const profileRoute = Routes.profile(props.author.username);

  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{props.body}</p>
      </div>
      <div className="card-footer">
        <Link to={profileRoute} className="comment-author">
          <img src={props.author.image} className="comment-author-img" />
        </Link>
        &nbsp;
        <Link to={profileRoute} className="comment-author">
          {props.author.username}
        </Link>
        <span className="date-posted">
          {new Date(props.createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
}
