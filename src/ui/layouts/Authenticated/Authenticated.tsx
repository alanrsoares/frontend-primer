import * as React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  Switch,
  Route,
  Link,
  RouteComponentProps,
  withRouter
} from "react-router-dom";

import { ROUTES } from "@domain/core";

import Dashboard from "@ui/pages/Dashboard";
import Genres from "@ui/pages/Genres";
import Movies from "@ui/pages/Movies";

import "./Authenticated.css";
import { capitalize } from "@helpers/string";

const { Header, Content, Footer } = Layout;

class Authenticated extends React.Component<RouteComponentProps> {
  public render() {
    return (
      <Layout className="Authenticated layout">
        <Header>
          <div className="logo" />
          {this.renderMenu()}
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {this.renderBreadcrumbs()}
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            {this.renderContent()}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Frontend Primer ©2018</Footer>
      </Layout>
    );
  }

  public renderMenu() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: "64px" }}
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
    const toItem = (name: string) => (
      <Breadcrumb.Item key={name}>{name}</Breadcrumb.Item>
    );

    const crumbs: string[] = ["Home"];

    switch (this.props.location.pathname) {
      case ROUTES.genres:
        crumbs.push("Genres");
        break;
    }

    return crumbs.map(toItem);
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

export default withRouter(Authenticated);
