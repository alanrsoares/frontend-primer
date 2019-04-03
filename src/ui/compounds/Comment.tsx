import React from "react";
import { ArticleComment } from "@domain/content/types";

interface Props extends ArticleComment {}

export default function Comment(props: Props) {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{props.body}</p>
      </div>
      <div className="card-footer">
        <a href="" className="comment-author">
          <img src={props.author.image} className="comment-author-img" />
        </a>
        &nbsp;
        <a href={`@${props.author.username}`} className="comment-author">
          {props.author.username}
        </a>
        <span className="date-posted">{props.createdAt}</span>
      </div>
    </div>
  );
}
