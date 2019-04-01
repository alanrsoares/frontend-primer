import { createActions } from "re-reduced";

import { Paginated, createAsyncCollectionReducer } from "@helpers/reducers";
import { AsyncCollection, RequestStatus } from "@lib/types";

describe("Helpers - reducers", () => {
  describe("createAsyncCollectionReducer", () => {
    interface Foo {
      id: string;
      name: string;
    }

    const actions = createActions(create => ({
      fetchFoos: create.asyncAction<Paginated<Foo>>()
    }));

    const reducer = createAsyncCollectionReducer<Foo>(actions.fetchFoos, "id");

    const initialState: AsyncCollection<Foo> = {
      byId: {},
      idList: [],
      request: {
        status: RequestStatus.Idle
      }
    };

    it("should handle AsyncAction.request updating the request status", () => {
      const expectedState = {
        ...initialState,
        request: {
          status: RequestStatus.Pending
        }
      };

      expect(reducer(initialState, actions.fetchFoos.request())).toEqual(
        expectedState
      );
    });

    it("should handle AsyncAction.failure updating the request status and error state", () => {
      const mockError = new Error("can't fetch Foos right now =/");

      const expectedState = {
        ...initialState,
        request: {
          status: RequestStatus.Failed,
          error: mockError
        }
      };

      expect(
        reducer(initialState, actions.fetchFoos.failure(mockError))
      ).toEqual(expectedState);
    });

    it("should handle AsyncAction.success updating the request status and indexing the result data", () => {
      const mockSuccessPayload: Paginated<Foo> = {
        total: 2,
        pageSize: 2,
        pageIndex: 0,
        items: [{ id: "id-1", name: "FOO 1" }, { id: "id-2", name: "FOO 2" }]
      };

      const expectedState = {
        byId: {
          "id-1": { id: "id-1", name: "FOO 1" },
          "id-2": { id: "id-2", name: "FOO 2" }
        },
        idList: ["id-1", "id-2"],
        request: {
          status: RequestStatus.Fulfilled
        }
      };

      expect(
        reducer(initialState, actions.fetchFoos.success(mockSuccessPayload))
      ).toEqual(expectedState);
    });
  });
});
