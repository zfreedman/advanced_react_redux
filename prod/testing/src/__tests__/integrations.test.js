import App from "components/app";
import { API_URL } from "../actions";
import { mount } from "enzyme";
import moxios from "moxios";
import React from "react";
import Root from "root";

const response = [1, 2].map(i => ({name: `name ${i}`}));

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(API_URL, {
    status: 200,
    response,
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", (done) => {
  // done allows us to force jest to wait so that an asynchronous
  // piece of functionality can be used

  // attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find fetchComments button and click it
  wrapped.find(".fetch-comments").simulate("click");

  // pause to give moxios time to process
  setTimeout(() => {
    // force wrapped to update immediately
    wrapped.update();

    // expect to find a list of comments!
    expect(wrapped.find("li").length).toEqual(2);
    done();

    // unmount
    wrapped.unmount();
  }, 100);

});
