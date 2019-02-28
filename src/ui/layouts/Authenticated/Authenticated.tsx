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

class Authenticated extends React.Component<Props> {
  public render() {
    return (
      <Layout className={styles.layout}>
        <Layout.Header style={{ display: "flex" }}>
          <div className={styles.logo} />
          <div style={{ flexGrow: 1 }}>{this.renderMenu()}</div>
          <div className={styles.user}>
            <Button onClick={this.handleLogout}>Logout</Button>
          </div>
        </Layout.Header>
        <Layout.Content className={styles.content}>
          <Breadcrumb className={styles.breadcrumbs}>
            {this.renderBreadcrumbs()}
          </Breadcrumb>
          <div className={styles.page}>{this.renderPage()}</div>
        </Layout.Content>
        <Layout.Footer className={styles.footer}>
          Frontend Primer ©{new Date().getFullYear()}
        </Layout.Footer>
      </Layout>
    );
  }

  public renderMenu() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        className={styles.menu}
        selectedKeys={[this.props.location.pathname]}
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
    );
  }

  public renderBreadcrumbs() {
    const toItem = (breadcrumb: BreadcrumbItem) => (
      <Breadcrumb.Item key={breadcrumb.text || "home"}>
        {breadcrumb.icon && <Icon type={breadcrumb.icon} />}
        {breadcrumb.text}
      </Breadcrumb.Item>
    );

    return this.props.breadcrumbs.map(toItem);
  }

  public renderPage() {
    return (
      <Switch>
        <Route exact path={ROUTES.home} component={Dashboard} />
        <Route path={ROUTES.genres} component={Genres} />
        <Route path={ROUTES.movies} component={Movies} />
      </Switch>
    );
  }

  private handleLogout = () => {
    this.props.actions.user.logout();
  };
}

const enhance = connectWithActions<Props>(actions, {
  breadcrumbs: selectors.getBreadcrumbs
});

export default enhance(withRouter(Authenticated));
