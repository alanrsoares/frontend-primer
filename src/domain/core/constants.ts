export enum FEATURES {
  MY_SUPER_SECRET_FEATURE = "MY_SUPER_SECRET_FEATURE"
}

export const API_CONFIG = {
  HOST:
    process.env.NODE_ENV === "production"
      ? "http://www.omdbapi.com/?i=tt3896198&apikey=4c4c5521"
      : "/api"
};

export enum ENDPOINTS {
  login = "/login",
  features = "/features",
  genres = "/genres",
  movies = "/movies"
}

export enum ROUTES {
  home = "/",
  genres = "/genres",
  movies = "/movies"
}

export type RouteKind = keyof typeof ROUTES;
