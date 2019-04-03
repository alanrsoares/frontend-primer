import { get } from "@lib/apiClient";
import { Endpoints } from "@domain/core";

import { ArticleCommentsResponse, ArticleComment } from "./types";
import { Result } from "@lib/types";

export default {
  fetch: get<ArticleCommentsResponse, string, string, Result<ArticleComment[]>>(
    Endpoints.comments,
    {
      transformResult: result => ({ items: result.comments })
    }
  )
};
