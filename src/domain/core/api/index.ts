import { get, post } from "@lib/apiClient";

import { ENDPOINTS } from "@domain/core/constants";
import { LoginPayload, Feature, LoginResponse } from "@domain/core/types";

export const fetchFeatures = get<void, Feature[]>(ENDPOINTS.features);

export const login = post<LoginPayload, LoginResponse>(ENDPOINTS.login);

export const logout = post<void, void>(ENDPOINTS.logout);

export const validateToken = post<string, boolean>(ENDPOINTS.validateToken);
