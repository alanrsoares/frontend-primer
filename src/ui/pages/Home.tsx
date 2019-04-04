import React, { useEffect } from "react";
import { connectWithActions } from "re-reduced";

import { actions } from "@domain/content";

import SideBar from "@ui/compounds/Sidebar";
import Feed from "@ui/compounds/Feed";
import Hero from "@ui/compounds/Hero";
import { selectors } from "@domain";

interface Props {
  actions: typeof actions;
  tags: string[];
}

export function Home(props: Props) {
  useEffect(() => {
    props.actions.tags.fetch();
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <Feed />
          </div>
          <div className="col-md-3">
            <SideBar tags={props.tags} />
          </div>
        </div>
      </div>
    </div>
  );
}

const enhance = connectWithActions<Props>(actions, {
  tags: selectors.getTags
});

export default enhance(Home);
