import { Genre } from "@domain/genres/types";
import actions from "@domain/genres/actions";
import reducer from "@domain/genres/reducers";
import { RequestStatus } from "@domain/core";

describe("genres/reducers", () => {
  describe("fetchGenres", () => {
    describe("success", () => {
      it("should normalise an incoming list of genres", () => {
        // arrange
        const initialState = {
          byId: {},
          idList: [],
          request: {
            status: RequestStatus.Idle,
            error: undefined
          }
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
          idList: ["genre-id-1", "genre-id-2", "genre-id-3"],
          request: {
            status: RequestStatus.Fulfilled,
            error: undefined
          }
        };

        expect(reducer(initialState, actions.fetch.success(payload))).toEqual(
          expectedState
        );
      });
    });
  });
});
