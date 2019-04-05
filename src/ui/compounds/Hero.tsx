import React from "react";

export default function Hero(props: { text?: string }) {
  return (
    <div className="banner" style={{ width: "100vw" }}>
      <div className="container">
        <h1 className="logo-font">conduit</h1>
        <p>{props.text || "A place to share your knowledge."}</p>
      </div>
    </div>
  );
}
