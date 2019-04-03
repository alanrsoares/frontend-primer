import * as React from "react";

import { connectWithActions } from "re-reduced";
import { Link, withRouter, RouteProps } from "react-router-dom";

import { selectors, actions, Routes } from "@domain/core";

interface Props extends RouteProps {
  isLoggingIn: boolean;
  actions: typeof actions;
}

function Auth(props: Props) {
  const isSignUp =
    props.location && props.location.pathname === Routes.register;

  const errors = ["That email is already taken"];

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">
              {isSignUp ? "Sign up" : "Sign in"}
            </h1>
            <p className="text-xs-center">
              {isSignUp ? (
                <Link to={Routes.login}>Have an account?</Link>
              ) : (
                <Link to={Routes.register}>Need an account?</Link>
              )}
            </p>
            {errors.length && (
              <ul className="error-messages">
                {errors.map(error => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}
            <form>
              {isSignUp && (
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                  />
                </fieldset>
              )}
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">
                {isSignUp ? "Sign up" : "Sign in"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const enhance = connectWithActions<Props>(actions, {
  isLoggingIn: selectors.getUserIsLoggingIn
});

export default withRouter(enhance(Auth));
