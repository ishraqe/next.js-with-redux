import React, { Component } from "react";
import { connect } from "react-redux";
import { initStore } from "../store/store";
import HomeComponent from "../components/Home";

class Home extends Component {
  render() {
    return <HomeComponent />;
  }
}

export default connect(
  initStore,
  null
)(Home);
