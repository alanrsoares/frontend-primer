import { createActions } from "re-reduced";

import {
  Feature,
  LoginPayload,
  Breadcrumb,
  LoginResponse
} from "@domain/core/types";

const core = createActions("CORE", create => ({
  setBreadcrumbs: create.action<Breadcrumb[]>(),
  bootstrap: create.asyncAction<void>()
}));

const user = createActions("CORE/USER", create => ({
  login: create.asyncAction<LoginResponse, LoginPayload>(),
  logout: create.asyncAction<void>()
}));

const features = createActions("CORE/FEATURES", create => ({
  fetch: create.asyncAction<Feature[]>()
}));

export default {
  ...core,
  user,
  features
};
