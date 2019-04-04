import React from "react";
import { Link } from "react-router-dom";
import qs from "query-string";
import { range } from "ramda";

import { PaginationState } from "@lib/types";

export default function Pagination(props: PaginationState) {
  const items = range(1, Math.round(props.total / props.pageSize) || 1);

  return (
    <nav>
      <ul className="pagination">
        {items.map(pageIndex => (
          <li
            key={pageIndex}
            className={`page-item ${props.pageIndex === pageIndex && "active"}`}
          >
            <Link to={`?${qs.stringify({ pageIndex })}`} className="page-link">
              {pageIndex}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
