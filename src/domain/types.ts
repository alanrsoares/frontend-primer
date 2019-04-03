import { CoreState } from "./core/types";
import { ContentState } from "./content/types";

export * from "./core/types";
export * from "./content/types";

export interface State {
  core: CoreState;
  content: ContentState;
}
