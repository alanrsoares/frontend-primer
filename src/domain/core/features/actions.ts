import { createActions } from "re-reduced";

import { Result } from "@lib/types";

import { Feature } from "./types";

export default createActions("CORE/FEATURES", create => ({
  fetch: create.asyncAction<Result<Feature[]>>()
}));
