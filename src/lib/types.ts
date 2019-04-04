export type Optional<T> = void | undefined | T;

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

export interface AsyncValue<TResult, TError = Error> {
  value: TResult | null;
  request: RequestState<TError>;
}

export interface MasterDetailState<T, TError = Error>
  extends Result<AsyncCollection<T, TError>> {}

export interface Result<T> {
  items: T;
}

export interface PaginationQuery {
  pageIndex: number;
  pageSize: number;
}

export type PaginationState = PaginationQuery & {
  total: number;
};

export interface Paginated<T> extends Result<T> {
  pagination: PaginationState | null;
}
