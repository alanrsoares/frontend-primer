import { ActionCreator } from "@domain/core/redux";

export function createAction<TPayload>(type: string): ActionCreator<TPayload> {
  const actionCreator = ((payload: TPayload) => ({
    type,
    payload
  })) as ActionCreator<TPayload>;

  actionCreator.type = type;

  return actionCreator;
}
