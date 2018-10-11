import { connect } from "react-redux";
import { ActionCreator } from "re-reduce";

import { actions } from "@domain";
import { transformTree, Tree } from "@helpers/objects";
import { Dispatch, AnyAction } from "redux";

type Dispatcher<T = any> = (payload: T) => void;

const toDispatcher = (dispatch: Dispatch<AnyAction>) => <T>(
  action: ActionCreator<T>
) => (payload: T) => dispatch(action(payload));

export function connectWithActions<TState, TProps>(
  mapStateToProps: (state: TState) => TProps
) {
  return connect(
    mapStateToProps,
    dispatch => ({
      actions: transformTree<ActionCreator, Dispatcher>({
        transformValue: toDispatcher(dispatch)
      })(actions as Tree<ActionCreator>)
    })
  );
}
