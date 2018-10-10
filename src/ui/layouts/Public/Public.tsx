import * as React from "react";
import { Layout } from "antd";

import Login from "@ui/pages/Login";

const { Header, Content } = Layout;

export default () => (
  <Layout style={{ minHeight: "100vh" }}>
    <Header style={{ background: "#fff", padding: 0 }} />
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        style={{
          padding: 24,
          background: "#fff",
          maxWidth: 300,
          margin: "auto"
        }}
      >
        <Login />
      </div>
    </Content>
  </Layout>
);
