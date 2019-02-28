import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { configureStore } from "./store";

import UI from "./ui";

import registerServiceWorker from "./registerServiceWorker";

const { store, persistor } = configureStore();

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UI />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);

registerServiceWorker();
