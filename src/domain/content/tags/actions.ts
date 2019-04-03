import { createActions } from "re-reduced";
import { Result } from "@lib/types";

export default createActions("CONTENT/TAGS", create => ({
  fetch: create.asyncAction<Result<string[]>>()
}));
