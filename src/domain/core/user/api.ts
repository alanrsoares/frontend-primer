import { post } from "@lib/apiClient";

import { Endpoints } from "@domain/core/constants";
import { LoginPayload, LoginResponse, ValidateTokenPayload } from "./types";

export const login = post<LoginResponse, LoginPayload>(Endpoints.login);

export const logout = post<void>(Endpoints.logout);

export const validateToken = post<boolean, ValidateTokenPayload>(
  Endpoints.validateToken
);
