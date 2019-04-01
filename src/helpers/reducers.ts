import { AsyncAction, createReducer, match } from "re-reduced";
import { merge } from "ramda";

import { AsyncCollection, RequestStatus } from "@lib/types";

import { indexBy } from "./list";

export interface Paginated<TData> {
  total: number;
  pageIndex: number;
  pageSize: number;
  items: TData[];
}

export function createAsyncCollectionReducer<
  TData,
  TPayload = void,
  TError = Error,
  TState extends AsyncCollection<TData, TError> = AsyncCollection<TData, TError>
>(
  action: AsyncAction<Paginated<TData>, TPayload, TError>,
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
