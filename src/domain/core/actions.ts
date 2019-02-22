import { createActions } from "re-reduced";

import {
  Feature,
  LoginPayload,
  UserProfile,
  Breadcrumb
} from "@domain/core/types";

const core = createActions("CORE", create => ({
  setBreadcrumbs: create.action<Breadcrumb[]>()
}));

const user = createActions("CORE/USER", create => ({
  login: create.asyncAction<UserProfile, LoginPayload>()
}));

const features = createActions("CORE/FEATURES", create => ({
  fetch: create.asyncAction<Feature[]>()
}));

export default {
  ...core,
  user,
  features
};
