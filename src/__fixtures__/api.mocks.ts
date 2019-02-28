import { Feature, FEATURES, ENDPOINTS, LoginPayload } from "@domain/core";
import { Genre } from "@domain/genres";
import { Movie } from "@domain/movies";

export interface APIMockResult<T = any> {
  data: T;
  status: number;
  delay?: number;
  ok?: boolean;
}

export const features: Feature[] = [
  { id: FEATURES.MY_SUPER_SECRET_FEATURE, isEnabled: true }
];

export const genres: Genre[] = [
  { id: "id-0", name: "horror" },
  { id: "id-1", name: "thriller" },
  { id: "id-2", name: "adventure" },
  { id: "id-3", name: "sci-fi" },
  { id: "id-4", name: "independent" }
];

export const movies: Movie[] = [
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

const MOCK_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const mocks: { [keys: string]: (...args: any[]) => APIMockResult } = {
  [`POST:${ENDPOINTS.login}`]: (login: LoginPayload) => ({
    data: {
      token: MOCK_JWT,
      profile: {
        id: "user-id-1",
        name: "Awesome User",
        email: login.email
      }
    },
    status: 200,
    delay: 1000
  }),
  [`POST:${ENDPOINTS.logout}`]: (_: void) => ({
    data: undefined,
    status: 200,
    delay: 500
  }),
  [`GET:${ENDPOINTS.features}`]: (_: void) => ({
    data: features,
    status: 200,
    delay: 2000
  }),
  [`GET:${ENDPOINTS.movies}`]: (_: void) => ({
    data: movies,
    status: 200,
    delay: 1000
  }),
  [`GET:${ENDPOINTS.genres}`]: (_: void) => ({
    data: genres,
    status: 200,
    delay: 2000
  })
};

export default mocks;
