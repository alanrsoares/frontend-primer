import { connect } from "react-redux";
import { ActionCreator } from "re-reduce";

import { actions } from "@domain";
import { transformTree, Tree } from "@helpers/objects";

type ActionDispatcher<T = any> = (payload: T) => void;

export function connectWithActions<TState, TProps>(
  mapStateToProps: (state: TState) => TProps
) {
  return connect(
    mapStateToProps,
    dispatch => ({
      actions: transformTree<ActionCreator, ActionDispatcher>({
        transformValue: (action: ActionCreator) => (payload: any) =>
          dispatch(action(payload))
      })(actions as Tree<ActionCreator>)
    })
  );
}
