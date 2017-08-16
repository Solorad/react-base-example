import React from "react";
import PT from "prop-types";
import { Field, reduxForm } from "redux-form";
import { renderTextField } from "../../components/FormField";
import RaisedButton from "material-ui/RaisedButton";

const validate = values => {
  const errors = {};
  const requiredFields = ["username", "password"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

const LoginForm = ({ loginSubmit, handleSubmit }) =>
  <form className="form" id="login-form" onSubmit={handleSubmit(({ username, password }) => loginSubmit(username, password))}>
    <div>
      <Field name="username" component={renderTextField} label="Username" autoComplete="off" />
    </div>
    <div>
      <Field name="password" component={renderTextField} label="Password" type="password" autoComplete="off"/>
    </div>
    <RaisedButton label="Login" type="submit" className="login-submit-button" primary={true} />
  </form>;

LoginForm.propTypes = {
  loginSubmit: PT.func.isRequired
};

export default reduxForm({
  form: "login",
  validate
})(LoginForm);
