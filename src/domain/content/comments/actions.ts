import { createActions } from "re-reduced";

import { Result } from "@lib/types";

import { ArticleComment } from "./types";

export default createActions("CONTENT/COMMENTS", create => ({
  fetch: create.asyncAction<Result<ArticleComment[]>, string>()
}));
