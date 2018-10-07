export interface Genre {
  id: string;
  name: string;
}

export interface State {
  byId: { [key: string]: Genre };
  idList: ReadonlyArray<string>;
}
