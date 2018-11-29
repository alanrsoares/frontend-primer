import { Feature, FEATURES, ENDPOINTS, LoginPayload } from "@domain/core";
import { Genre } from "@domain/genres";
import { Movie } from "@domain/movies";

const features: Feature[] = [
  { id: FEATURES.MY_SUPER_SECRET_FEATURE, isEnabled: true }
];

const genres: Genre[] = [
  { id: "id-0", name: "horror" },
  { id: "id-1", name: "thriller" },
  { id: "id-2", name: "adventure" },
  { id: "id-3", name: "sci-fi" },
  { id: "id-4", name: "independent" }
];

const movies: Movie[] = [
  {
    id: "id-0",
    title: "Alien",
    year: 1985,
    director: "Martin Scorcese",
    country: "U.S & A",
    score: 9.6
  },
  {
    id: "id-1",
    title: "Alien 2",
    year: 1989,
    director: "Scorciezzi Martinez",
    country: "U.S & A, Greatest Country In the world",
    score: 3.2
  }
];

export default {
  [`POST:${ENDPOINTS.login}`]: (login: LoginPayload) => ({
    data: {
      id: "user-id-1",
      name: "Awesome User",
      email: login.email
    },
    delay: 1000
  }),
  [`GET:${ENDPOINTS.features}`]: (_: void) => ({
    data: features,
    delay: 2000
  }),
  [`GET:${ENDPOINTS.movies}`]: (_: void) => ({
    data: movies,
    delay: 1000
  }),
  [`GET:${ENDPOINTS.genres}`]: (_: void) => ({
    data: genres,
    delay: 2000
  })
};
