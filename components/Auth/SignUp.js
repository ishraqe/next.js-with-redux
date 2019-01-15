import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../store/actions/index";
import { bindActionCreators } from "redux";

class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  handleInputChange = (key, value) => {
    const newUser = {
      ...this.state.user,
      [key]: value
    };
    this.setState({ user: newUser });
  };
  handleSignUpFormSubmit = event => {
    event.preventDefault();
    this.props.createUser(this.state.user);
  };

  render() {
    return (
      <div className="section-sign">
        <div className="container">
          <div className="wrapper">
            <div className="authform-container">
              <form onSubmit={this.handleSignUpFormSubmit}>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="First name"
                    onChange={e =>
                      this.handleInputChange("first_name", e.target.value)
                    }
                  />
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Last name"
                    onChange={e =>
                      this.handleInputChange("last_name", e.target.value)
                    }
                  />
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="username"
                    onChange={e =>
                      this.handleInputChange("username", e.target.value)
                    }
                  />
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="email"
                    onChange={e =>
                      this.handleInputChange("email", e.target.value)
                    }
                  />
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="password"
                    onChange={e =>
                      this.handleInputChange("password", e.target.value)
                    }
                  />
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
