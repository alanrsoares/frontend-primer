import { AsyncAction, createReducer, match } from "re-reduced";
import { merge } from "ramda";

import {
  AsyncCollection,
  RequestStatus,
  Paginated,
  PaginationState,
  Collection
} from "@lib/types";

import { indexBy } from "./list";
import { combineReducers } from "redux";

export function createPaginationReducer<
  TData = any,
  TPayload = void,
  TError = Error
>(action: AsyncAction<Paginated<TData[]>, TPayload, TError>) {
  const INITIAL_STATE: PaginationState = null;
  return createReducer<PaginationState>(
    [match(action.success, (_, payload) => payload.pagination || null)],
    INITIAL_STATE
  );
}

export function createAsyncCollectionReducer<
  TData,
  TPayload = void,
  TError = Error,
  TState extends AsyncCollection<TData, TError> = AsyncCollection<
    TData,
    TError
  >,
  TResult extends Collection<TData[]> = Collection<TData[]>
>(
  action: AsyncAction<TResult, TPayload, TError>,
  idKey: keyof TData,
  initialState?: Partial<TState>
) {
  const defaultState = {
    byId: {},
    idList: [] as string[],
    request: {
      status: RequestStatus.Idle
    }
  };

  const INITIAL_STATE = merge(defaultState, initialState) as TState;

  return createReducer<TState>(
    [
      match(action.request, state => ({
        ...state,
        request: {
          status: RequestStatus.Pending
        }
      })),
      match(action.success, (state, payload) => ({
        ...state,
        byId: indexBy(idKey, payload.items),
        idList: payload.items.map(item => String(item[idKey])),
        request: {
          status: RequestStatus.Fulfilled
        }
      })),
      match(action.failure, (state, payload) => ({
        ...state,
        request: {
          status: RequestStatus.Failed,
          error: payload
        }
      }))
    ],
    INITIAL_STATE
  );
}

export function createAsyncPaginatedCollectionReducer<
  TData,
  TPayload = void,
  TError = Error,
  TState extends Paginated<AsyncCollection<TData, TError>> = Paginated<
    AsyncCollection<TData, TError>
  >
>(
  action: AsyncAction<Paginated<TData[]>, TPayload, TError>,
  idKey: keyof TData,
  initialState?: Partial<TState>
) {
  const defaultState = {
    items: {
      byId: {},
      idList: [] as string[],
      request: {
        status: RequestStatus.Idle
      }
    },
    pagination: null
  } as TState;

  const INITIAL_STATE = merge(defaultState, initialState) as TState;

  return combineReducers<Paginated<AsyncCollection<TData, TError>>>({
    items: createAsyncCollectionReducer(action, idKey, INITIAL_STATE.items),
    pagination: createPaginationReducer(action)
  });
}
