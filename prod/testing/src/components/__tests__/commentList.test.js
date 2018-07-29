import React from "react";
import { mount } from "enzyme";

import CommentList from "components/commentList";
import Root from "root";

let wrapped;
let initialState;
beforeEach(() => {
  initialState = {
    comments: [1, 2].map(e => `comment ${e}`)
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});
afterEach(() => {
  wrapped.unmount();
});

it("creates one <li> per comment", () => {
  expect(wrapped.find("li").length).toEqual(initialState.comments.length);
});
