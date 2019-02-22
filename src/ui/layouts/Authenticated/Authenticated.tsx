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

import { Breadcrumb as BreadcrumbItem } from "@domain/core";

import { capitalize } from "@helpers/string";

import { State } from "@domain";
import { ROUTES } from "@domain/core";

import Dashboard from "@ui/pages/Dashboard";
import Genres from "@ui/pages/Genres";
import Movies from "@ui/pages/Movies";

import "./Authenticated.css";

const { Header, Content, Footer } = Layout;

interface Props extends RouteComponentProps {
  breadcrumbs: BreadcrumbItem[];
}

const styles: { [key: string]: React.CSSProperties } = {
  layout: { minHeight: "100vh" },
  contentWrapper: { padding: "0 50px" },
  breadcrumb: { margin: "16px 0" },
  content: { background: "#fff", padding: 24, minHeight: 280 },
  footer: { margin: 10, textAlign: "center" },
  menu: { lineHeight: "64px" }
};

class Authenticated extends React.Component<Props> {
  public render() {
    return (
      <Layout className="Authenticated layout" style={styles.layout}>
        <Header>
          <div className="logo" />
          {this.renderMenu()}
        </Header>
        <Content style={styles.contentWrapper}>
          <Breadcrumb style={styles.breadcrumb}>
            {this.renderBreadcrumbs()}
          </Breadcrumb>
          <div style={styles.content}>{this.renderContent()}</div>
        </Content>
        <Footer style={styles.footer}>
          Frontend Primer ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    );
  }

  public renderMenu() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        style={styles.menu}
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

  public renderContent() {
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
    breadcrumbs: (state: State) => state.core.breadcrumbs
  })
);

export default withRouter(enhance(Authenticated));
