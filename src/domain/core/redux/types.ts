export type Action<T> = {
  type: string;
  payload: T;
};

export type ActionCreator<T> = { type: string } & ((payload: T) => Action<T>);

export type ActionHandler<TPayload, TState> = (
  p: TPayload,
  s: TState
) => TState;

export type ActionHandlerMap<TState> = {
  [key: string]: ActionHandler<any, TState>;
};

export type Reducer<TState, TAction> = (
  state: TState,
  action: TAction
) => TState;
