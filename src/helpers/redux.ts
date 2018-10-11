import { connect } from "react-redux";
import { ActionCreator } from "re-reduce";

import { actions } from "@domain";
import { transformTree, Tree } from "@helpers/objects";

type Dispatcher<T = any> = (payload: T) => void;

export function connectWithActions<TState, TProps>(
  mapStateToProps: (state: TState) => TProps
) {
  return connect(
    mapStateToProps,
    dispatch => ({
      actions: transformTree<ActionCreator, Dispatcher>({
        transformValue: <T>(action: ActionCreator<T>) => (payload: T) =>
          dispatch(action(payload))
      })(actions as Tree<ActionCreator>)
    })
  );
}
