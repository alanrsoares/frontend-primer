import { get } from "@lib/apiClient";
import { Endpoints } from "@domain/core";

import { Result } from "@lib/types";
import { ArticleCommentsResponse, ArticleComment } from "./types";

export default {
  fetch: get<ArticleCommentsResponse, string, string, Result<ArticleComment[]>>(
    Endpoints.comments,
    {
      transformResult: result => ({ items: result.comments })
    }
  )
};
