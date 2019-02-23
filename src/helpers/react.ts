import { CSSProperties } from "react";

export const styleSheet = <T extends { [key: string]: CSSProperties }>(
  styles: T
) => styles;
