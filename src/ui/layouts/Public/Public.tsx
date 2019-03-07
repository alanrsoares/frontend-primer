import * as React from "react";
import { Layout } from "antd";

import Login from "@ui/pages/Login";

const { Header, Content } = Layout;

export default function Public() {
  return (
    <Layout tagName="section">
      <Header tagName="header" style={{ background: "#fff", padding: 0 }} />
      <Content tagName="section" style={{ margin: "24px 16px 0" }}>
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
}
