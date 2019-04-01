export enum RequestStatus {
  Idle = "Idle",
  Pending = "Pending",
  Failed = "Failed",
  Fulfilled = "Fulfilled"
}

export interface RequestState<TError = Error> {
  status: RequestStatus;
  error?: TError;
}

export interface AsyncCollection<TResult, TError = Error> {
  byId: { [id: string]: TResult };
  idList: string[];
  request: RequestState<TError>;
}

export interface Collection<T> {
  items: T;
}

export interface Paginated<T> extends Collection<T> {
  pagination: PaginationState;
}

export type PaginationState = null | {
  total: number;
  pageIndex: number;
  pageSize: number;
};
