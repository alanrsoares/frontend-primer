import { get } from "@helpers/api";

import { ENDPOINTS } from "@domain/core/constants";
import { LoginPayload, UserProfile, Feature } from "@domain/core/types";

export const fetchFeatures = get<void, Feature[]>(ENDPOINTS.features);

export const login = get<LoginPayload, UserProfile>(ENDPOINTS.login);
