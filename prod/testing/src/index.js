import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import App from "components/app";
import Root from "root";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector("#root")
);
