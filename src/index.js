import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import "./index.css";
import registerServiceWorker from "./serviceWorkerRegistration";

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
