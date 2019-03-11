import { createActions } from "re-reduced";

import { Feature } from "./types";

export default createActions("CORE/FEATURES", create => ({
  fetch: create.asyncAction<Feature[]>()
}));
