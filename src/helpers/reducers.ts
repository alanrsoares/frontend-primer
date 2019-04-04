import { combineReducers } from "redux";
import { AsyncAction, createReducer } from "re-reduced";
import { merge, always } from "ramda";

import { indexBy } from "@helpers/list";

import {
  AsyncCollection,
  RequestStatus,
  Paginated,
  PaginationState,
  Result,
  RequestState,
  AsyncValue
} from "@lib/types";

export function createRequestReducer<
  TResult = any,
  TPayload = void,
  TError = Error
>(action: AsyncAction<TResult, TPayload, TError>) {
  const INITIAL_STATE: RequestState<TError> = {
    status: RequestStatus.Idle
  };

  return createReducer<RequestState<TError>>(
    [
      action.request.reduce(
        always({
          status: RequestStatus.Pending
        })
      ),
      action.success.reduce(
        always({
          status: RequestStatus.Fulfilled
        })
      ),
      action.failure.reduce((_, error) => ({
        status: RequestStatus.Failed,
        error
      }))
    ],
    INITIAL_STATE
  );
}

export function createPaginationReducer<
  TData = any,
  TPayload = void,
  TError = Error
>(
  action: AsyncAction<Paginated<TData[]>, TPayload, TError>,
  initialState?: PaginationState
) {
  const INITIAL_STATE: PaginationState | null = initialState || null;

  return createReducer<PaginationState | null>(
    action.success.reduce((_, payload) => payload.pagination || null),
    INITIAL_STATE
  );
}

export function createAsyncCollectionReducer<
  TData,
  TPayload = void,
  TError = Error,
  TResult extends Result<TData[]> = Result<TData[]>
>(
  action: AsyncAction<TResult, TPayload, TError>,
  idKey: keyof TData,
  initialState?: Partial<AsyncCollection<TData, TError>>
) {
  type TState = AsyncCollection<TData, TError>;

  const defaultState: TState = {
    byId: {},
    idList: [],
    request: {
      status: RequestStatus.Idle
    }
  };

  const INITIAL_STATE: TState = merge(defaultState, initialState);

  return combineReducers<TState>({
    byId: createReducer(
      action.success.reduce((_, payload) => indexBy(idKey, payload.items)),
      INITIAL_STATE.byId
    ),
    idList: createReducer(
      action.success.reduce((_, payload) =>
        payload.items.map(item => String(item[idKey]))
      ),
      INITIAL_STATE.idList
    ),
    request: createRequestReducer(action)
  });
}

export function createAsyncValueReducer<TData, TPayload = void, TError = Error>(
  action: AsyncAction<TData, TPayload, TError>,
  initialState?: TData
) {
  type TState = AsyncValue<TData, TError>;

  return combineReducers<TState>({
    value: createReducer(
      [
        action.success.reduce((_, payload) => payload),
        action.failure.reduce(() => initialState || null)
      ],
      initialState || null
    ),
    request: createRequestReducer(action)
  });
}

export function createAsyncPaginatedCollectionReducer<
  TData,
  TPayload = void,
  TError = Error
>(
  action: AsyncAction<Paginated<TData[]>, TPayload, TError>,
  idKey: keyof TData,
  initialState?: Partial<Paginated<AsyncCollection<TData, TError>>>
) {
  type TState = Paginated<AsyncCollection<TData, TError>>;

  const defaultState: TState = {
    items: {
      byId: {},
      idList: [],
      request: {
        status: RequestStatus.Idle
      }
    },
    pagination: null
  };

  const INITIAL_STATE: TState = merge(defaultState, initialState);

  return combineReducers<TState>({
    items: createAsyncCollectionReducer(action, idKey, INITIAL_STATE.items),
    pagination: createPaginationReducer(action)
  });
}
