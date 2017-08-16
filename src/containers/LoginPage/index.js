import React from "react";
import Helmet from "react-helmet";
import { loginSubmit } from "../../redux/login";
import { Container } from "../../components";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import LoginForm from "./LoginForm";

import "./LoginPage.css";

class LoginPage extends React.Component {
  render() {
    const { loginSubmit, error, session } = this.props;
    if (session) {
      browserHistory.push("/")
    }

    return (
      <div>
        <Helmet title="User authentication" />
        <Container>
          {error ? <div className="errorMessage"> {error.message}</div> : null}
          <LoginForm loginSubmit={loginSubmit} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.login.error,
    session: state.login.session
  };
};

export default connect(mapStateToProps, { loginSubmit })(LoginPage);
