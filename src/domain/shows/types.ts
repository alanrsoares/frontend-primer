export interface Show {
  id: string;
}

export interface State {
  byId: { [key: string]: Show };
  idList: ReadonlyArray<string>;
}
