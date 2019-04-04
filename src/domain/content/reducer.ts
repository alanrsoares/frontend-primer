import { combineReducers } from "redux";

import articles from "./articles/reducer";
import comments from "./comments/reducer";
import tags from "./tags/reducer";
import profiles from "./profiles/reducer";

export default combineReducers({
  articles,
  comments,
  tags,
  profiles
});
