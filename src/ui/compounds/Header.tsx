import React from "react";
import { connectWithActions } from "re-reduced";
import { withRouter, RouteProps } from "react-router";
import { Link } from "react-router-dom";

import { actions, Routes } from "@domain/core";
import { selectors } from "@domain";

interface Props extends RouteProps {
  actions: typeof actions;
  isAuthenticated: boolean;
}

export function Header(props: Props) {
  const navItems = [
    {
      label: "Home",
      path: Routes.home,
      active: props.location && props.location.pathname === Routes.home,
      visible: true
    },
    {
      label: "New Post",
      path: Routes.editor(),
      active: props.location && props.location.pathname === Routes.editor(),
      icon: "ion-compose",
      visible: props.isAuthenticated
    },
    {
      label: "Settings",
      path: Routes.settings,
      active: props.location && props.location.pathname === Routes.settings,
      icon: "ion-gear-a",
      visible: props.isAuthenticated
    },
    {
      label: "Sign In",
      path: Routes.login,
      active: props.location && props.location.pathname === Routes.login,
      visible: !props.isAuthenticated
    },
    {
      label: "Sign Up",
      path: Routes.register,
      active: props.location && props.location.pathname === Routes.register,
      visible: !props.isAuthenticated
    }
  ].filter(x => x.visible);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to={Routes.home}>
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          {navItems.map(nav => (
            <li className="nav-item" key={nav.label}>
              <Link
                className={`nav-link ${nav.active && "active"}`}
                to={nav.path}
              >
                {nav.icon && (
                  <>
                    <i className={nav.icon} />
                    &nbsp;
                  </>
                )}
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const enhance = connectWithActions<Props>(actions, {
  isAuthenticated: selectors.getUserIsAuthenticated
});

export default withRouter(enhance(Header));
