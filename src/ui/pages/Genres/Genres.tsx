import React, { useEffect } from "react";
import { connectWithActions } from "re-reduced";

import { actions, selectors } from "@domain";
import { Genre } from "@domain/genres";

interface Props {
  genres: Genre[];
  actions: typeof actions;
}

export function Genres(props: Props) {
  useEffect(() => {
    props.actions.core.app.setBreadcrumbs([
      { icon: "home" },
      { text: "Genres" }
    ]);
    props.actions.genres.fetch();
  }, []);

  return (
    <div className="Genres">
      <h3>Genres</h3>
      {!props.genres.length ? (
        <div>Loading genres...</div>
      ) : (
        <div>
          <ul>
            {props.genres.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const enhance = connectWithActions<Props>(actions, {
  genres: selectors.getGenres
});

export default enhance(Genres);
