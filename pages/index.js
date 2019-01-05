import React, { Component } from "react";
import { connect } from "react-redux";
import { initStore } from "../store/store";

class Home extends Component {
  render() {
    return <h1>Home page</h1>;
  }
}

export default connect(
  initStore,
  null
)(Home);
