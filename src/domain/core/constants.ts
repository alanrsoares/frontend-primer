export const API_CONFIG = {
  HOST: "https://conduit.productionready.io/api"
};

export const Endpoints = {
  features: "/features",
  login: "/auth/login",
  logout: "/auth/logout",
  validateToken: "/auth/validate",
  tags: "/tags",
  articles: `${API_CONFIG.HOST}/articles`,
  comments: "/comments"
};

export const Routes = {
  home: "/",
  login: "/login",
  register: "/register",
  settings: "/settings",
  editor: (slug: string = ":slug") => `/editor/${slug}`,
  profile: (username: string = ":username") => `/profile/${username}`,
  article: (slug: string = ":slug") => `/article/${slug}`
};

export type RouteKind = keyof typeof Routes;
