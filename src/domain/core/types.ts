export enum Features {
  movies = "movies"
}

export interface Feature {
  id: Features;
  isEnabled: boolean;
}

export type FeaturesState = LazyCollection<Feature>;

export interface UserProfile {
  id: string;
  name: string;
  email: string;
}

export interface Breadcrumb {
  text?: string;
  icon?: string;
}

export interface UserState {
  isAuthenticated: boolean;
  isLoggingIn: boolean;
  profile?: UserProfile;
}

export interface AuthState {
  token: string | undefined;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  profile: UserProfile;
}

export interface State {
  features: FeaturesState;
  user: UserState;
  breadcrumbs: Breadcrumb[];
  auth: AuthState;
  isBootstrapped: boolean;
}

export enum RequestStatus {
  Idle = "Idle",
  Pending = "Pending",
  Failed = "Failed",
  Fulfilled = "Fulfilled"
}

export interface RequestState<TError = Error> {
  status: RequestStatus;
  error?: TError;
}

export interface LazyCollection<TResult, TError = Error> {
  byId: { [id: string]: TResult };
  idList: string[];
  request: RequestState<TError>;
}
