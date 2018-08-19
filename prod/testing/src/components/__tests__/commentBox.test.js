import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/commentBox";
import Root from "root";

let wrapped;
beforeEach(() => {
  // full dom render
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and two buttons", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("text area edit tests", () => {
  const input = "new comment";
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: {value: input}
    });
    wrapped.update();
  });

  it("has a text area users can type in", () => {
    // assert
    // note: using the old reference to textarea forces this test to fail
    expect(wrapped.find("textarea").prop("value")).toEqual(input);
  });

  it("has a submittable form and the text area empties", () => {
    wrapped.find("form").simulate("submit", {});
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
