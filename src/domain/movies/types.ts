export interface Movie {
  id: string;
  title: string;
  country: string;
  director: string;
  year: number;
  score: number;
}

export interface State {
  byId: { [key: string]: Movie };
  idList: ReadonlyArray<string>;
}
