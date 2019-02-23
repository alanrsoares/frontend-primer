import * as React from "react";
import { applySpec } from "ramda";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import {
  Switch,
  Route,
  Link,
  RouteComponentProps,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";

import { Breadcrumb as BreadcrumbItem, selectors, ROUTES } from "@domain/core";

import { capitalize } from "@helpers/string";

import Dashboard from "@ui/pages/Dashboard";
import Genres from "@ui/pages/Genres";
import Movies from "@ui/pages/Movies";

import styles from "./Authenticated.module.css";

interface Props extends RouteComponentProps {
  breadcrumbs: BreadcrumbItem[];
}

class Authenticated extends React.Component<Props> {
  public render() {
    return (
      <Layout className={styles.layout}>
        <Layout.Header>
          <div className={styles.logo} />
          {this.renderMenu()}
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
}

const enhance = connect(
  applySpec<Props>({
    breadcrumbs: selectors.getBreadcrumbs
  })
);

export default withRouter(enhance(Authenticated));
