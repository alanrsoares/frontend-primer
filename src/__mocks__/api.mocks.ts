import { Feature, FEATURES, LoginPayload } from "@domain/core";
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
    country: "U.S & A",
    score: 3.2
  }
];

export default {
  "POST:login": (payload: LoginPayload) => ({
    result: {
      id: "user-id-1",
      name: "Awesome User",
      email: payload.email
    },
    delay: 1000
  }),
  "GET:features": (payload: any) => ({
    result: features,
    delay: 2000
  }),
  "GET:movies": (payload: any) => ({
    result: movies,
    delay: 1000
  }),
  "GET:genres": (payload: any) => ({
    result: genres,
    delay: 2000
  })
};
