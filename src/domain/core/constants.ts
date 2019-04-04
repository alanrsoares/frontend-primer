export const API_CONFIG = {
  HOST: "https://conduit.productionready.io/api"
};

export const Endpoints = {
  features: "/features",
  login: "/auth/login",
  logout: "/auth/logout",
  validateToken: "/auth/validate",
  tags: `${API_CONFIG.HOST}/tags`,
  articles: `${API_CONFIG.HOST}/articles`,
  comments: `${API_CONFIG.HOST}/comments`,
  profiles: `${API_CONFIG.HOST}/profiles`
};

export const Routes = {
  home: "/",
  login: "/login",
  register: "/register",
  settings: "/settings",
  editor: (slug: string = ":slug") => `/editor/${slug}`,
  article: (slug: string = ":slug") => `/article/${slug}`,
  profile: (username: string = ":username") => `/@${username}`
};

export type RouteKind = keyof typeof Routes;
