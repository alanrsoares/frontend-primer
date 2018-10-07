export interface Movie {
  id: string;
}

export interface State {
  byId: { [key: string]: Movie };
  idList: ReadonlyArray<string>;
}
