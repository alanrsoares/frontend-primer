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

export interface Result<T> {
  items: T;
}

export interface PaginatedResult<T> extends Result<T> {
  pagination: PaginationState;
}

export type PaginationState = null | {
  total: number;
  pageIndex: number;
  pageSize: number;
};
