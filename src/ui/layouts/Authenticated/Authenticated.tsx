import * as React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  Switch,
  Route,
  Link,
  withRouter,
  RouteComponentProps
} from "react-router-dom";

import Genres from "@ui/pages/Genres";
import Dashboard from "@ui/pages/Dashboard";

import "./Authenticated.css";

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
            <div>{JSON.stringify(this.props)}</div>
            {this.renderContent()}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
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
        <Menu.Item key="/" isSelected={this.props.location.pathname === "/"}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item
          key="/genres"
          isSelected={this.props.location.pathname === "/genres"}
        >
          <Link to="/genres">Genres</Link>
        </Menu.Item>
      </Menu>
    );
  }

  public renderBreadcrumbs() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Breadcrumb.Item>Home</Breadcrumb.Item>}
        />
        <Route
          path="/genres"
          render={() => (
            <React.Fragment>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Genres</Breadcrumb.Item>
            </React.Fragment>
          )}
        />
      </Switch>
    );
  }

  public renderContent() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/genres" component={Genres} />
      </Switch>
    );
  }
}

export default withRouter(Authenticated);
