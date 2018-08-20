import tv4 from "tv4";

import stateSchema from "./stateSchema";

export default ({ dispatch, getState }) => next => action => {
  // pass on action in an attempt to get updated state (syncrhonously)
  // ...if there's an async middleware afte this, won't have certainty
  // of rest of function
  next(action);

  // validate state against schema

  if (!tv4.validate(getState(), stateSchema))
    console.warn("(CUSTOM MIDDLEWARE)Invalid state schema detected");
};
