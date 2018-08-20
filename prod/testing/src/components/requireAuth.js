import React from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends React.Component {
    render () {
      return <ChildComponent />;
    }

    componentDidMount () {
      this.handleUnauthenticated();
    }

    componentDidUpdate () {
      this.handleUnauthenticated();
    }

    handleUnauthenticated () {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }
  }

  let mapStateToProps = ({ auth }) => ({ auth });

  return connect(mapStateToProps)(ComposedComponent);
};
