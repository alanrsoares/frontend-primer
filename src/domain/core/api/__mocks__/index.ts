import { Feature, UserProfile } from "@domain/core/types";

export const fetchFeatures: Feature[] = [
  { id: "super-secret-feature", isEnabled: true }
];

export const login: UserProfile = {
  id: "user-id-123",
  name: "John Doe",
  email: "email@example.com"
};
