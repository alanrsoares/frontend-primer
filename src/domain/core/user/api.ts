import { post } from "@lib/apiClient";

import { ENDPOINTS } from "@domain/core/constants";
import { LoginPayload, LoginResponse, ValidateTokenPayload } from "./types";

export const login = post<LoginPayload, LoginResponse>(ENDPOINTS.login);

export const logout = post<void, void>(ENDPOINTS.logout);

export const validateToken = post<ValidateTokenPayload, boolean>(
  ENDPOINTS.validateToken
);
