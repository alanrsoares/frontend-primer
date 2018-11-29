import { createAsyncAction, createAction } from "re-reduced";

import {
  Feature,
  LoginPayload,
  UserProfile,
  Breadcrumb
} from "@domain/core/types";

export default {
  setBreadcrumbs: createAction<Breadcrumb[]>("SET_BREADCRUMBS", "CORE"),
  features: {
    fetch: createAsyncAction<void, Feature[]>("FETCH", "CORE/FEATRUES")
  },
  user: {
    login: createAsyncAction<LoginPayload, UserProfile>("LOGIN", "CORE/USER")
  }
};
