import { AsyncAction, createReducer, match } from "re-reduced";

import { LazyCollection as AsyncCollection, RequestStatus } from "@lib/types";

import { indexBy } from "./list";

export interface PaginatedResult<TData> {
  count: number;
  page: number;
  data: TData[];
}

export function createAsyncCollectionReducer<
  TData,
  TPayload = void,
  TError = Error
>(
  action: AsyncAction<PaginatedResult<TData>, TPayload, TError>,
  idKey: keyof TData
) {
  type ReducerState = AsyncCollection<TData, TError>;

  const INITIAL_STATE: ReducerState = {
    byId: {},
    idList: [],
    request: {
      status: RequestStatus.Idle,
      error: undefined
    }
  };

  return createReducer<ReducerState>(
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
