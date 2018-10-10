import * as React from "react";

import { Form, Icon, Input, Button, Checkbox, Layout } from "antd";
import { FormComponentProps } from "antd/lib/form";

const { Header, Content } = Layout;

import "./index.css";

const FormItem = Form.Item;

interface Props extends FormComponentProps {
  foo: string;
}

class NormalLoginForm extends React.Component<Props> {
  public handleSubmit = () => {
    this.props.form.validateFields((err: Error, values: object) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

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
        <WrappedNormalLoginForm foo="bar" />
      </div>
    </Content>
  </Layout>
);
