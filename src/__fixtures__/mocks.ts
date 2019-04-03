import { Endpoints, API_CONFIG } from "@domain/core";

import ApiMockRouter from "@lib/ApiMockRouter";

import { Feature, Features } from "@domain/core/features/types";
import { LoginPayload } from "@domain/core/user/types";

export interface APIMockResult<T = any> {
  data: T;
  status: number;
  delay?: number;
  ok?: boolean;
}

export const features: Feature[] = [{ id: Features.movies, isEnabled: true }];

const MOCK_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const mockRouter = new ApiMockRouter(API_CONFIG.HOST);

export const mockApi = mockRouter
  .post(Endpoints.login, (_, body: LoginPayload) => ({
    data: {
      token: MOCK_JWT,
      profile: {
        id: "user-id-1",
        name: "Awesome User",
        email: body.email
      }
    },
    delay: 1000
  }))
  .post(Endpoints.logout, () => ({
    data: undefined
  }))
  .post(Endpoints.validateToken, () => ({
    data: true
  }))
  .get(Endpoints.features, () => ({
    data: { items: features }
  }));
