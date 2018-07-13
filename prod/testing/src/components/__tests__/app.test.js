import React from "react";
import ReactDOM from "react-dom";

import App from "../app";

it("shows a comment box", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain("comment box");
  ReactDOM.unmountComponentAtNode(div);
});
