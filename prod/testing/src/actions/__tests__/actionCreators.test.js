import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("saveComment", () => {
  let action;
  let comment = "new comment";
  beforeEach(() => {
    action = saveComment(comment);
  });

  it("has the correct type", () => {
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    expect(action.payload).toEqual(comment);
  });
});
