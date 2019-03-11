import { UserState } from "./user/types";
import { FeaturesState } from "./features/types";
import { AppState } from "./app/types";

export * from "./user/types";
export * from "./features/types";
export * from "./app/types";

export interface CoreState {
  features: FeaturesState;
  user: UserState;
  app: AppState;
}
