export const API_CONFIG = {
  HOST:
    process.env.NODE_ENV === "production"
      ? "https://frontend-primer.netlify.com"
      : "/api"
};

export enum ENDPOINTS {
  features = "/features",
  genres = "/genres",
  movies = "/movies",
  login = "/auth/login",
  logout = "/auth/logout",
  validateToken = "/auth/validate"
}

export enum ROUTES {
  home = "/",
  genres = "/genres",
  movies = "/movies"
}

export type RouteKind = keyof typeof ROUTES;
