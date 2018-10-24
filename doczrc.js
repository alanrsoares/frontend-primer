import { css } from "docz-plugin-css";

export default {
  title: "Frontend Primer",
  typescript: true,
  plugins: [
    css({
      preprocessor: "postcss",
      cssmodules: false
    })
  ]
};
