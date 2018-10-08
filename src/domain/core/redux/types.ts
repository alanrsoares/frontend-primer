export interface Action<T = void> {
  type: string;
  payload: T;
}

export interface AsyncActions<TRun, TSuccess> {
  run: ActionCreator<TRun>;
  request: ActionCreator;
  success: ActionCreator<TSuccess>;
  failure: ActionCreator<Error>;
}

export interface ActionHandlerMap<TState> {
  [key: string]: ActionHandler<any, TState>;
}

export type ActionCreator<T = void> = { type: string } & ((
  payload?: T
) => Action<T>);

export type ActionHandler<TPayload, TState> = (
  p: TPayload,
  s: TState
) => TState;

export type Reducer<TState, TAction> = (
  state: TState,
  action: TAction
) => TState;
