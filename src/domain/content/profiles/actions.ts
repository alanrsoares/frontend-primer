import { createActions } from "re-reduced";

import { AuthorProfile } from "./types";

export default createActions("CONTENT/PROFILES", create => ({
  fetchDetail: create.asyncAction<AuthorProfile, string>()
}));
