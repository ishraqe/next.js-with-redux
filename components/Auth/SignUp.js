import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../store/actions/index";
import { bindActionCreators } from "redux";

class SignUpComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const user = {
      name: "ish"
    };
    this.props.createUser(user);
  }
  handleInputChange = propertyName => event => {
    const { user } = this.state;
    const newUser = {
      ...user,
      [propertyName]: event.target.value
    };
    console.log(newUser);
    this.setState({ user: newUser });
  };

  render() {
    return (
      <div className="section-sign">
        <div className="container">
          <div className="wrapper">
            <div className="authform-container">
              <form>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="First name"
                    onChange={e => this.handleInputChange(e, "email")}
                  />
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Last name" />
                </div>
                <div className="input-container">
                  <input type="text" placeholder="username" />
                </div>
                <div className="input-container">
                  <input type="text" placeholder="email" />
                </div>
                <div className="input-container">
                  <input type="text" placeholder="password" />
                </div>
                <div className="button-container">
                  <button className="btn btn-submit">SignUp</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapsDsipatchToProps = dispatch => {
  return {
    createUser: bindActionCreators(createUser, dispatch)
  };
};

export default connect(
  null,
  mapsDsipatchToProps
)(SignUpComponent);
