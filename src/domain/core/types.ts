export interface Feature {
  id: string;
  isEnabled: boolean;
}

export interface State {
  features: {
    byId: { [key: string]: Feature };
    idList: ReadonlyArray<string>;
  };
}
