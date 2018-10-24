export const API_BASE_URL =
  "http://www.omdbapi.com/?i=tt3896198&apikey=4c4c5521";

export const ENDPOINTS = {
  genres: "genres",
  movies: "movies",
  shows: "shows"
};

export enum ROUTES {
  home = "/",
  genres = "/genres",
  movies = "/movies",
  shows = "/shows"
}

export type RouteKind = keyof typeof ROUTES;
