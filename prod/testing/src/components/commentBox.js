import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends React.Component {
  state = {comment: ""};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
    );
  }

  handleChange = event => {
    this.setState({comment: event.target.value});
  };

  handleSubmit = event => {
    // prevent page from reloading
    event.preventDefault();

    // call action creator
    // save comment by user
    this.props.saveComment(this.state.comment);

    // empty out text area
    this.setState({comment: ""});
  };
};

export default connect(null, actions)(CommentBox);
