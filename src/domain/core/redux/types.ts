import { Action } from "redux";

export interface AsyncActions<TRun, TSuccess> {
  run: ActionCreator<TRun>;
  request: ActionCreator;
  success: ActionCreator<TSuccess>;
  failure: ActionCreator<Error>;
}

export interface ActionHandlerMap<TState> {
  [key: string]: ActionHandler<any, TState>;
}

export interface ActionCreator<T = void> {
  (): Action;
  (payload: T): Action<T>;
  type: string;
}

export type ActionHandler<TPayload, TState> = (
  p: TPayload,
  s: TState
) => TState;

export type Reducer<TState, TAction> = (
  state: TState,
  action: TAction
) => TState;
