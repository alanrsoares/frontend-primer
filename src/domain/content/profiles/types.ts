import { AsyncCollection, AsyncValue } from "@lib/types";

export interface AuthorProfile {
  /**
   * id
   */
  username: string;
  bio: string | null;
  following: boolean;
  image: string;
}

export interface ProfilesState {
  items: AsyncCollection<AuthorProfile>;
  detail: AsyncValue<AuthorProfile>;
}

export interface ProfileResult {
  profile: AuthorProfile;
}
