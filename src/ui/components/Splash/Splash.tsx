import React from "react";

import { ReactComponent as Icon } from "./icon.svg";
import styles from "./Splash.module.css";

export default function Splash() {
  return (
    <div className={styles.container}>
      <Icon className={styles.spinner} />
      <div className={styles.text}>Frontend Primer is initializing...</div>
    </div>
  );
}
