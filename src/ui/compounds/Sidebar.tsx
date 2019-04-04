import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "@domain/core";

const TagLink = (props: { children: string }) => (
  <Link
    to={`${Routes.home}?tag=${props.children}`}
    className="tag-pill tag-default"
  >
    {props.children}
  </Link>
);

interface Props {
  tags: string[];
}

export default function SideBar(props: Props) {
  return (
    <div className="sidebar">
      <p>Popular Tags</p>

      <div className="tag-list">
        {!props.tags.length && <span>Loading tags...</span>}
        {props.tags.map(tag => (
          <TagLink key={tag}>{tag}</TagLink>
        ))}
      </div>
    </div>
  );
}
