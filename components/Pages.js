import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
class Pages extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Pages;
