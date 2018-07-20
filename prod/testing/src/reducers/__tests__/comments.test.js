import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";
import { saveComment } from "actions";

it("handles actions of type SAVE_COMMENT", () => {
  const commentStr = "new action";
  const action = saveComment(commentStr);

  const newState = commentsReducer([], action);

  expect(newState).toEqual([commentStr]);
});

it("handles unknown actions without error", () => {
  expect(commentsReducer([], {type: "UNKNOWN_123"})).toEqual([]);
});
