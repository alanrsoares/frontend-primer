import * as React from "react";
import { applySpec } from "ramda";
import { connectWithActions } from "re-reduced";

import { Actions, actions } from "@domain";
import { selectors, Genre } from "@domain/genres";

interface Props {
  genres: Genre[];
  actions: Actions;
}

export class Genres extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    props.actions.genres.fetch();
  }

  public render() {
    return (
      <div className="Genres">
        <h3>Genres</h3>
        {this.renderContent()}
      </div>
    );
  }

  private renderContent() {
    if (!this.props.genres.length) {
      return <div>Loading genres...</div>;
    }

    return (
      <div>
        <ul>{this.props.genres.map(this.renderItem)}</ul>
      </div>
    );
  }

  private renderItem(item: Genre) {
    return (
      <li>
        id: {item.id} - name: {item.name}
      </li>
    );
  }
}

const enhance = connectWithActions(actions)(
  applySpec<Props>({
    genres: selectors.getGenres
  })
);

export default enhance(Genres);
