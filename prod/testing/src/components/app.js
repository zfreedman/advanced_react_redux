import { connect } from "react-redux";
import React from "react";
import { Link, Route } from "react-router-dom";

import CommentList from "components/commentList";
import CommentBox from "components/commentBox";
import { authChange } from "actions";

class App extends React.Component {
  render () {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }

  handleSignInOrOut = () => {
    this.props.dispatch(authChange(!this.props.auth));
  }

  renderButton = () => {
    const auth = this.props.auth;
    return (
      <button onClick={this.handleSignInOrOut}>
        {auth ? "Sign Out" : "Sign In"}
      </button>
    );
  }

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/post">Post a comment</Link>
        </li>

        <li>
          {this.renderButton()}
        </li>
      </ul>
    );
  }
};

let mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(App);
