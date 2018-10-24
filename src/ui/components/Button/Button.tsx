import React, { ReactNode } from "react";

export const Button = (props: { children: ReactNode }) => (
  <button>{props.children}</button>
);

export default Button;
