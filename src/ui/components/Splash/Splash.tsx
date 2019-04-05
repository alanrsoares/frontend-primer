import React from "react";

import Hero from "@ui/compounds/Hero";

import styles from "./Splash.module.css";

export default function Splash() {
  return (
    <div className={`home-page ${styles.container}`}>
      <Hero text="Initializing Conduit..." />
    </div>
  );
}
