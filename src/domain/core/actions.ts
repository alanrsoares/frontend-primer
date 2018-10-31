import { createAsyncActions, createAction } from "re-reduced";

import {
  Feature,
  LoginPayload,
  UserProfile,
  Breadcrumb
} from "@domain/core/types";

export default {
  features: {
    fetch: createAsyncActions<void, Feature[]>("FETCH", "CORE/FEATRUES")
  },
  user: {
    login: createAsyncActions<LoginPayload, UserProfile>("LOGIN", "CORE/USER")
  },
  setBreadcrumbs: createAction<Breadcrumb[]>("CORE/SET_BREADCRUMBS")
};
