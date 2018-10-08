import { State as GenresState } from "@domain/genres/types";

const INITIAL_STATE: GenresState = {
  byId: {},
  idList: []
};

export default function reducer() {
  return INITIAL_STATE;
}
