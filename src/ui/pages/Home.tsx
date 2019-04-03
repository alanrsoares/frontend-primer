import * as React from "react";

import SideBar from "@ui/compounds/Sidebar";
import Feed from "@ui/compounds/Feed";
import Hero from "@ui/compounds/Hero";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <Feed />
          </div>
          <div className="col-md-3">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
