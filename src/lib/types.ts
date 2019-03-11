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

export interface LazyCollection<TResult, TError = Error> {
  byId: { [id: string]: TResult };
  idList: string[];
  request: RequestState<TError>;
}
