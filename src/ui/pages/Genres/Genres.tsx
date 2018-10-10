import * as React from "react";
import { connect } from "react-redux";
import { applySpec } from "ramda";

import { selectors, Genre } from "@domain/genres";

interface Props {
  genres: Genre[];
}

export class Genres extends React.Component<Props> {
  public render() {
    return (
      <div className="Genres">
        <h3>Genres</h3>
        <div>
          <ul>{this.props.genres.map(g => g.name)}</ul>
        </div>
      </div>
    );
  }
}

export default connect(
  applySpec({
    genres: selectors.getGenres
  })
);
