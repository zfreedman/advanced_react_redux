import React from "react";
// import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import App from "components/app";
import CommentBox from "components/commentBox";
import CommentList from "components/commentList";

// variables to referenced from different test scopes
let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it ("shows a comment box", () => {
  // without enzyme
  // const div = document.createElement("div");
  // ReactDOM.render(<App />, div);
  // expect(div.innerHTML).toContain("comment box");
  // ReactDOM.unmountComponentAtNode(div);

  // with enzyme
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it ("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
