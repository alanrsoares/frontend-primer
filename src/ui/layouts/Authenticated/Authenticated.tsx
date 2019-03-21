import * as React from "react";
import { Layout, Menu, Breadcrumb, Icon, Button } from "antd";
import {
  Switch,
  Route,
  Link,
  RouteComponentProps,
  withRouter
} from "react-router-dom";

import {
  Breadcrumb as BreadcrumbItem,
  selectors,
  ROUTES,
  actions
} from "@domain/core";

import { capitalize } from "@helpers/string";

import Dashboard from "@ui/pages/Dashboard";
import Genres from "@ui/pages/Genres";
import Movies from "@ui/pages/Movies";

import styles from "./Authenticated.module.css";
import { connectWithActions } from "re-reduced";

interface Props extends RouteComponentProps {
  breadcrumbs: BreadcrumbItem[];
  actions: typeof actions;
}

function Authenticated(props: Props) {
  const handleLogout = () => {
    props.actions.user.logout();
  };

  return (
    <Layout>
      <Layout.Header className={styles.header}>
        <div className={styles.logo} />
        <div style={{ flexGrow: 1 }}>
          <Menu
            theme="dark"
            mode="horizontal"
            className={styles.menu}
            selectedKeys={[props.location.pathname]}
          >
            {Object.keys(ROUTES).map(key => {
              const item = ROUTES[key] as string;

              return (
                <Menu.Item key={item}>
                  <Link to={item}>{capitalize(key)}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </div>
        <div className={styles.user}>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </Layout.Header>
      <Layout.Content className={styles.content}>
        <Breadcrumb className={styles.breadcrumbs}>
          {props.breadcrumbs.map(breadcrumb => (
            <Breadcrumb.Item key={breadcrumb.text || "home"}>
              {breadcrumb.icon && <Icon type={breadcrumb.icon} />}
              {breadcrumb.text}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <div className={styles.page}>
          <Switch>
            <Route exact path={ROUTES.home} component={Dashboard} />
            <Route path={ROUTES.genres} component={Genres} />
            <Route path={ROUTES.movies} component={Movies} />
          </Switch>
        </div>
      </Layout.Content>
      <Layout.Footer className={styles.footer}>
        Frontend Primer ©{new Date().getFullYear()}
      </Layout.Footer>
    </Layout>
  );
}

const enhance = connectWithActions<Props>(actions, {
  breadcrumbs: selectors.getBreadcrumbs
});

export default enhance(withRouter(Authenticated));
