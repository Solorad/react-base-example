import { push } from "react-router-redux";
import { reset } from "redux-form";
import { CognitoUser, CognitoUserPool, AuthenticationDetails } from "amazon-cognito-identity-js";
import { CognitoIdentityCredentials } from "aws-sdk";

import poolData from "../resources/config";

const LOGIN = "LOGIN";
const LOGIN_REQUEST = "LOGIN_REQUEST";
const SIGNOUT = "SIGNOUT";

export default function loginReducer(state = initValues, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action
      };

    case SIGNOUT:
      return {
        ...state,
        session: null
      };

    default:
      return state;
  }
}

export const initValues = {
  token: "",
  isLoggedIn: false,
  cognitoUser: null
};

global.AWS.config.update({
  region: poolData.region
});

const userPool = new CognitoUserPool({
  UserPoolId: poolData.UserPoolId,
  ClientId: poolData.ClientId
});

export function loginSubmit(username, password) {
  return (dispatch, getState) => {
    dispatch({
      type: LOGIN_REQUEST
    });
    const userData = {
      Username: username,
      Pool: userPool
    };
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password
    });
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: session => {
        console.log(session);
        const name = `cognito-idp.${poolData.region}.amazonaws.com/${poolData.UserPoolId}`;
        const logins = {};
        logins[name] =  session.idToken.jwtToken;
        global.AWS.config.credentials = new CognitoIdentityCredentials({
          IdentityPoolId: poolData.IdentityPoolId,
          Logins: logins
        });
        global.AWS.config.credentials.get(function() {
          const accessParams = {
            accessKey:  global.AWS.config.credentials.accessKeyId,
            secretKey:  global.AWS.config.credentials.secretAccessKey,
            sessionToken: session.idToken.jwtToken,
            region: poolData.region
          };
          console.log(accessParams);
          const apigClient = global.apigClientFactory.newClient(accessParams);
          dispatch({
            type: LOGIN,
            session,
            cognitoUser,
            apigClient,
            error: null
          });
          dispatch(push("/"));
        });
      },
      onFailure: error => {
        dispatch({
          type: LOGIN,
          error
        });
      }
    });
  };
}

export function signout() {
  console.log("signout!");
  return (dispatch, getState, api) => {
    if (getState().login.session) {
      getState().login.cognitoUser.signOut();
      global.AWS.config.credentials.clearCachedId();
    }
    dispatch(reset("login"));
    dispatch(push("/login"));
    dispatch({
      type: SIGNOUT
    });
  };
}
