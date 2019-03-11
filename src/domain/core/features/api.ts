import { get } from "@lib/apiClient";

import { Feature } from "./types";
import { ENDPOINTS } from "../constants";

export const fetchFeatures = get<void, Feature[]>(ENDPOINTS.features);
