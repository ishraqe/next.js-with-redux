import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
import Router from "next/router";
import { getCookie } from "../utils/Cookies";

class Pages extends Component {
  redirectToLogin = res => {
    if (res) {
      res.writeHead(302, { Location: "/login" });
      res.end();
      res.finished = true;
    } else {
      Router.push("/auth/login");
    }
  };
  componentDidMount() {
    console.log(getCookie("ide_token"));
  }
  render() {
    console.log("hey");
    return (
      <div>
        <Meta />
        <Header {...this.props} />
        {this.props.children}
      </div>
    );
  }
}

export default Pages;
