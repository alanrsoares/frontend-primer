import { createActions } from "re-reduced";

import { LoginResponse, LoginPayload, ValidateTokenPayload } from "./types";

export default createActions("CORE/USER", create => ({
  login: create.asyncAction<LoginResponse, LoginPayload>(),
  logout: create.asyncAction<void>(),
  validateToken: create.asyncAction<boolean, ValidateTokenPayload>()
}));
