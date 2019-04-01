import { get } from "@lib/apiClient";

import { Result } from "@lib/types";

import { Feature } from "./types";
import { ENDPOINTS } from "../constants";

export const fetchFeatures = get<Result<Feature[]>>(ENDPOINTS.features);
