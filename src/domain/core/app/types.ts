export interface AppState {
  breadcrumbs: Breadcrumb[];
  isBootstrapped: boolean;
}

export interface Breadcrumb {
  icon?: string;
  text?: string;
}
