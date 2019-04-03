import { get } from "@lib/apiClient";

import { Result } from "@lib/types";

import { Feature } from "./types";
import { Endpoints } from "../constants";

export const fetchFeatures = get<Result<Feature[]>>(Endpoints.features);
