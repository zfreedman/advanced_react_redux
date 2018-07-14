import React from "react";

import CommentList from "components/commentList";
import CommentBox from "components/commentBox";

export default () => {
  return (
    <div>
      app component
      <CommentBox />
      <CommentList />
    </div>
  );
};
