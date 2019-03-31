import { AsyncAction, createReducer, match } from "re-reduced";

import { LazyCollection as AsyncCollection, RequestStatus } from "@lib/types";

import { indexBy } from "./list";
import { merge, mergeWith } from "ramda";

export interface PaginatedResult<TData> {
  count: number;
  page: number;
  data: TData[];
}

export function createAsyncCollectionReducer<
  TData,
  TPayload = void,
  TError = Error,
  TState extends AsyncCollection<TData, TError> = AsyncCollection<TData, TError>
>(
  action: AsyncAction<PaginatedResult<TData>, TPayload, TError>,
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
        byId: indexBy(idKey, payload.data),
        idList: payload.data.map(item => String(item[idKey])),
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
