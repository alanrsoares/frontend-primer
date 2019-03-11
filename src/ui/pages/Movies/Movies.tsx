import React, { useEffect } from "react";
import { connectWithActions } from "re-reduced";

import { actions, selectors } from "@domain";
import { Movie } from "@domain/movies";

interface Props {
  movies: Movie[];
  actions: typeof actions;
}

export function Movies(props: Props) {
  useEffect(() => {
    props.actions.core.app.setBreadcrumbs([
      { icon: "home" },
      { text: "Movies" }
    ]);
    props.actions.movies.fetch();
  }, []);

  return (
    <div className="Movies">
      <h3>Movies</h3>
      {!props.movies.length ? (
        <div>Loading movies...</div>
      ) : (
        <div>
          <ul>
            {props.movies.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const enhance = connectWithActions<Props>(actions, {
  movies: selectors.getMovies
});

export default enhance(Movies);
