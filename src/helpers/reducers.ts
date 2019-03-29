import { AsyncAction, createReducer, match } from "re-reduced";

import { LazyCollection, RequestStatus } from "@lib/types";

import { indexBy } from "./list";

export interface PaginatedResult<TData> {
  count: number;
  page: number;
  data: TData[];
}

export function createLazyCollectionReducer<
  TData,
  TAction extends AsyncAction<PaginatedResult<TData>> = AsyncAction<
    PaginatedResult<TData>
  >
>(action: TAction, idKey: keyof TData) {
  const initialState: LazyCollection<TData> = {
    byId: {},
    idList: [],
    request: {
      status: RequestStatus.Idle,
      error: undefined
    }
  };

  return createReducer<LazyCollection<TData>>(
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
        idList: payload.data.map(item => item[idKey] as any) as string[],
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
    initialState
  );
}
