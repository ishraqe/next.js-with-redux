import React, { Component } from "react";
import Main from "../../components/Auth/SignUp";
import { connect } from "react-redux";
import { initStore } from "../../store/store";

class SignUp extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Main {...this.props} />
      </div>
    );
  }
}

export default connect(
  initStore,
  null
)(SignUp);
