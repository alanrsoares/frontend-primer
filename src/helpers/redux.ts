import { Dispatch, compose } from "redux";
import { connect } from "react-redux";
import { ActionCreator } from "re-reduce";

import { actions } from "@domain";
import { transformTree } from "@helpers/objects";

type Dispatcher<T = any> = (payload: T) => void;

const toDispatcher = (dispatch: Dispatch) => <T>(action: ActionCreator<T>) =>
  compose<Dispatcher<T>>(
    dispatch,
    action
  );

export function connectWithActions<TState, TProps>(
  mapStateToProps: (state: TState) => TProps
) {
  const mapDisptachToProps = (dispatch: Dispatch) => ({
    actions: transformTree<ActionCreator, Dispatcher>({
      transformValue: toDispatcher(dispatch)
    })(actions) as typeof actions
  });

  return connect(
    mapStateToProps,
    mapDisptachToProps
  );
}
