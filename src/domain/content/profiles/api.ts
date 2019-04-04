import { Endpoints } from "@domain/core";
import { get } from "@lib/apiClient";

import { AuthorProfile, ProfileResult } from "./types";

export default {
  fetchDetail: get<ProfileResult, string, string, AuthorProfile>(
    Endpoints.profiles,
    {
      transformEndpoint: username => `${Endpoints.profiles}/${username}`,
      transformResult: result => result.profile
    }
  )
};
