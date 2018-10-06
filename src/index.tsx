import * as React from "react";
import * as ReactDOM from "react-dom";
import UI from "./ui";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<UI />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
