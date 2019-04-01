import { get } from "@lib/apiClient";

import { Result } from "@lib/types";

import { Feature } from "./types";
import { ENDPOINTS } from "../constants";

export const fetchFeatures = get<void, Result<Feature[]>>(ENDPOINTS.features);
