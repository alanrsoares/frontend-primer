import { connect } from "react-redux";

import { actions } from "@domain";
import { ActionCreator } from "@domain/core/redux";
import { transformTree, Tree } from "@helpers/objects";

type ActionDispatcher<T = any> = (payload: T) => void;

export function connectWithActions<TState, TProps>(
  mapStateToProps: (state: TState) => TProps
) {
  return connect(
    mapStateToProps,
    dispatch => ({
      actions: transformTree<ActionCreator, ActionDispatcher>({
        transformValue: (ac: ActionCreator) => (payload: any) =>
          dispatch(ac(payload))
      })(actions as Tree<any>)
    })
  );
}
