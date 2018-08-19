import { AUTH_CHANGE } from "actions/types";

export default function (state = false, action) {
  switch (action.type) {

    case AUTH_CHANGE:
      return action.payload;

    default:
      return state;
  }
}
