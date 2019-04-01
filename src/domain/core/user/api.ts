import { post } from "@lib/apiClient";

import { ENDPOINTS } from "@domain/core/constants";
import { LoginPayload, LoginResponse, ValidateTokenPayload } from "./types";

export const login = post<LoginResponse, LoginPayload>(ENDPOINTS.login);

export const logout = post<void>(ENDPOINTS.logout);

export const validateToken = post<boolean, ValidateTokenPayload>(
  ENDPOINTS.validateToken
);
