import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";

function Root(props) {
  return (
    <BrowserRouter>
      {props.flag ? <App /> : <h1> No App found </h1>}
    </BrowserRouter>
  );
}
ReactDOM.render(<Root flag={true} />, document.getElementById("root"));
registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements(window);
});
