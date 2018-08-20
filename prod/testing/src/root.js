import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";

import asyncMiddleware from "middleware/async";
import reducers from "reducers";
import stateValidator from "middleware/stateValidator";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(asyncMiddleware, stateValidator)
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
