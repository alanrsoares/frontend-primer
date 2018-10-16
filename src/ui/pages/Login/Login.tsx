import * as React from "react";
import { applySpec } from "ramda";
import { connectWithActions } from "re-reduced";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { FormComponentProps } from "antd/lib/form";

import { Actions, actions, selectors } from "@domain";
import { LoginPayload } from "@domain/core";

import "./Login.css";

const FormItem = Form.Item;

interface Props extends FormComponentProps {
  isLoggingIn: boolean;
  actions: Actions;
}

interface Fields extends LoginPayload {
  remember: boolean;
}

class LoginForm extends React.Component<Props> {
  private decorators = {
    remember: this.props.form.getFieldDecorator<Fields>("remember", {
      valuePropName: "checked",
      initialValue: true
    }),
    password: this.props.form.getFieldDecorator<Fields>("password", {
      rules: [{ required: true, message: "Please input your Password!" }]
    }),
    email: this.props.form.getFieldDecorator<Fields>("email", {
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
    })
  };

  public handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err: Error, values: Fields) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.actions.core.user.login({
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

  public render() {
    return (
      <Form onSubmit={this.handleSubmit} className="Login">
        <FormItem>
          {this.decorators.email(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              disabled={this.props.isLoggingIn}
            />
          )}
        </FormItem>
        <FormItem>
          {this.decorators.password(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              disabled={this.props.isLoggingIn}
            />
          )}
        </FormItem>
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
}

const enhance = connectWithActions(actions)(
  applySpec<Props>({
    isLoggingIn: selectors.getUserIsLoggingIn
  })
);

export default enhance(Form.create<Fields>()(LoginForm));
