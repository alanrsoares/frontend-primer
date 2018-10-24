import { Feature, UserProfile } from "@domain/core/types";

export const features: Feature[] = [
  { id: "super-secret-feature", isEnabled: true }
];

export const userProfile: UserProfile = {
  id: "user-id-123",
  name: "John Doe",
  email: "email@example.com"
};
