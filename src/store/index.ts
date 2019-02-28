import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import { rootReducer } from "@domain";
import rootSaga from "@store/middleware/saga";
import logger from "@store/middleware/logger";

// set-up redux middlewares

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

export function configureStore() {
  const storeEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, storeEnhancer);

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}
