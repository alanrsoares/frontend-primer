import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "@store";

import UI from "@ui";

import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <UI />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);

registerServiceWorker();
