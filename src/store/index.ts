import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import saga from "@store/middleware/saga";
import logger from "@store/middleware/logger";
import { rootReducer } from "@domain";

// set-up redux middlewares

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];

export function configureStore() {
  const storeEnhancer = composeWithDevTools(applyMiddleware(...middleware));
  const store = createStore(rootReducer, storeEnhancer);

  sagaMiddleware.run(saga);

  return store;
}
