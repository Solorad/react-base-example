import React from "react";
import { Container } from "../../components";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { signout } from "../../redux/login";
import RaisedButton from "material-ui/RaisedButton";
import { browserHistory } from "react-router";
import JSONPretty from "react-json-pretty";

class LandingPage extends React.Component {
  state = {
    response: {}
  };

  componentDidMount() {
    if (this.props.session) {
      const params = {};

      const additionalParams = {
        headers: {
          Authorization: this.props.session.idToken.jwtToken
        },
        queryParams: {
        }
      };
      console.log("additionalParams");
      console.log(additionalParams);
      this.props.apigClient
        .identityiamGet({}, {}, additionalParams)
        .then(e => {
          console.log("In response");
          console.log(e);
          this.setState({ response: e });
        })
        .catch(e => {
          console.log("In catch");
          console.log(e);
          this.setState({ response: e });
        });
    }
  }

  render() {
    const { signout, session } = this.props;
    if (!session) {
      browserHistory.push("/login");
    }

    return (
      <div>
        <Helmet title="Landing Page" />
        <Container>
          <div className="text-center">
            <JSONPretty id="json-pretty" json={this.state.response} />
          </div>
          <RaisedButton label="Signout" secondary={true} onClick={signout} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    session: state.login.session,
    apigClient: state.login.apigClient
  };
};

export default connect(mapStateToProps, {
  signout
})(LandingPage);
