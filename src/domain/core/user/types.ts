import { RequestState } from "@lib/types";

export interface UserState {
  isAuthenticated: boolean;
  loginRequest: RequestState;
  profile?: UserProfile;
  token?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  profile: UserProfile;
}

export interface ValidateTokenPayload {
  token: string;
}
