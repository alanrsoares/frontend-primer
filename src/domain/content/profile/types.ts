export interface AuthorProfile {
  /**
   * id
   */
  username: string;
  bio: string | null;
  following: boolean;
  image: string;
}
