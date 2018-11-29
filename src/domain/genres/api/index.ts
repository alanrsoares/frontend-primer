import { get } from "../../../helpers/api";

import { ENDPOINTS } from "../../core";
import { Genre } from "../../genres/types";

export const fetchGenres = get<void, Genre[]>(ENDPOINTS.genres);

export const fetchDetail = get<string, Genre>(ENDPOINTS.genres, {
  transformEndpoint: (id, endpoint) => `${endpoint}/${id}`
});
