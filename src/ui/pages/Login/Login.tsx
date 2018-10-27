import * as React from "react";
import { applySpec, mapObjIndexed, assoc } from "ramda";
import { connectWithActions } from "re-reduced";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { FormComponentProps } from "antd/lib/form";

import { LoginPayload, actions, selectors } from "@domain/core";

import "./Login.css";

const FormItem = Form.Item;

interface Props extends FormComponentProps {
  isLoggingIn: boolean;
  actions: typeof actions;
}

interface Fields extends LoginPayload {
  remember: boolean;
}

class LoginForm extends React.Component<Props> {
  public decoratorOptions = {
    remember: {
      valuePropName: "checked",
      initialValue: true
    },
    password: {
      rules: [{ required: true, message: "Please input your Password!" }]
    },
    email: {
      rules: [
        {
          required: true,
          message: "Please input your email!"
        },
        {
          type: "email",
          message: "Must be a valid email!"
        }
      ]
    }
  };

  public handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err: Error, values: Fields) => {
      if (!err) {
        console.log(
          "Received values of form: ",
          assoc("password", "omitted for security reasons", values)
        );
        this.props.actions.user.login({
          email: values.email,
          password: values.password
        });
      }
    });
  };

  get hasErrors() {
    const errors = this.props.form.getFieldsError() as Fields;
    return !!errors.email || !!errors.password;
  }

  get decorators() {
    return mapObjIndexed(
      (v, k) => this.props.form.getFieldDecorator(k, v),
      this.decoratorOptions
    );
  }

  public render() {
    return (
      <Form onSubmit={this.handleSubmit} className="Login">
        <FormItem>{this.renderEmailField()}</FormItem>
        <FormItem>{this.renderPasswordField()}</FormItem>
        <FormItem>
          {this.decorators.remember(<Checkbox>Remember me</Checkbox>)}
          <a className="Login--forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="Login--button"
            disabled={this.props.isLoggingIn || this.hasErrors}
          >
            {this.props.isLoggingIn ? "Loging in..." : "Log in"}
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }

  public renderEmailField() {
    return this.decorators.email(
      <Input
        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        placeholder="Email"
        disabled={this.props.isLoggingIn}
      />
    );
  }

  public renderPasswordField() {
    return this.decorators.password(
      <Input
        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
        type="password"
        placeholder="Password"
        disabled={this.props.isLoggingIn}
      />
    );
  }
}

const enhance = connectWithActions(
  actions,
  applySpec<Props>({
    isLoggingIn: selectors.getUserIsLoggingIn
  })
);

export default enhance(Form.create<Fields>()(LoginForm));
