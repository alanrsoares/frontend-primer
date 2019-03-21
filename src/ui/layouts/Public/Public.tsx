import * as React from "react";
import { Layout } from "antd";

import Login from "@ui/pages/Login";

export default function Public() {
  return (
    <Layout>
      <Layout.Header style={{ background: "#fff", padding: 0 }} />
      <Layout.Content style={{ margin: "24px 16px 0" }}>
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
      </Layout.Content>
    </Layout>
  );
}
