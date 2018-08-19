import React from "react";
import { Route } from "react-router-dom";

import CommentList from "components/commentList";
import CommentBox from "components/commentBox";

export default () => {
  return (
    <div>
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};
