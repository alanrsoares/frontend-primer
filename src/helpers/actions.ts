import { ActionCreator, AsyncActions } from "@domain/core/redux";

export function createAction<TPayload>(type: string): ActionCreator<TPayload> {
  const actionCreator = ((payload: TPayload) => ({
    payload,
    type
  })) as ActionCreator<TPayload>;

  actionCreator.type = type;

  return actionCreator;
}

export function createAsyncActions<TRun, TSuccess>(
  type: string,
  domain: string
): AsyncActions<TRun, TSuccess> {
  return {
    run: createAction<TRun>(`${domain}/${type}`),
    request: createAction(`${domain}/${type}_REQUEST`),
    success: createAction<TSuccess>(`${domain}/${type}_SUCCESS`),
    failure: createAction(`${domain}/${type}_FAILURE`)
  };
}
