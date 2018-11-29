import { Genre } from "../../types";
import actions from "../../actions";
import reducer from "../../reducers";

describe("genres/reducers", () => {
  describe("fetchGenres", () => {
    describe("success", () => {
      it("should normalise an incoming list of genres", () => {
        // arrange
        const initialState = {
          byId: {},
          idList: []
        };

        const payload: Genre[] = [
          { id: "genre-id-1", name: "drama" },
          { id: "genre-id-2", name: "horror" },
          { id: "genre-id-3", name: "comedy" }
        ];

        const expectedState = {
          byId: {
            "genre-id-1": { id: "genre-id-1", name: "drama" },
            "genre-id-2": { id: "genre-id-2", name: "horror" },
            "genre-id-3": { id: "genre-id-3", name: "comedy" }
          },
          idList: ["genre-id-1", "genre-id-2", "genre-id-3"]
        };

        expect(
          reducer(initialState, actions.fetchGenres.success(payload))
        ).toEqual(expectedState);
      });
    });
  });
});
