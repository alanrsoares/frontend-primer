export interface Feature {
  id: string;
  isEnabled: boolean;
}

export interface FeaturesState {
  byId: { [key: string]: Feature };
  idList: ReadonlyArray<string>;
}

export interface UserProfile {
  name: string;
  email: string;
}

export interface UserState {
  isAuthenticated: boolean;
  profile: UserProfile;
}

export interface State {
  features: FeaturesState;
  user: UserState;
}
