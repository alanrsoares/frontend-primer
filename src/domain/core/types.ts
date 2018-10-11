export interface Feature {
  id: string;
  isEnabled: boolean;
}

export interface FeaturesState {
  byId: { [key: string]: Feature };
  idList: ReadonlyArray<string>;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
}

export interface UserState {
  isAuthenticated: boolean;
  profile?: UserProfile;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface State {
  features: FeaturesState;
  user: UserState;
}
