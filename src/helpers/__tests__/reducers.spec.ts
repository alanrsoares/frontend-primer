import { createActions } from "re-reduced";

import { createAsyncPaginatedCollectionReducer } from "@helpers/reducers";
import { AsyncCollection, RequestStatus, PaginatedResult } from "@lib/types";

describe("Helpers - reducers", () => {
  describe("createAsyncCollectionReducer", () => {
    interface Foo {
      id: string;
      name: string;
    }

    const actions = createActions(create => ({
      fetchFoos: create.asyncAction<PaginatedResult<Foo[]>>()
    }));

    const reducer = createAsyncPaginatedCollectionReducer<Foo>(
      actions.fetchFoos,
      "id"
    );

    const initialState: PaginatedResult<AsyncCollection<Foo>> = {
      items: {
        byId: {},
        idList: [],
        request: {
          status: RequestStatus.Idle
        }
      },
      pagination: null
    };

    it("should handle AsyncAction.request updating the request status", () => {
      const expectedState = {
        ...initialState,
        items: {
          ...initialState.items,
          request: {
            status: RequestStatus.Pending
          }
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
        items: {
          ...initialState.items,
          request: {
            status: RequestStatus.Failed,
            error: mockError
          }
        }
      };

      expect(
        reducer(initialState, actions.fetchFoos.failure(mockError))
      ).toEqual(expectedState);
    });

    it("should handle AsyncAction.success updating the request status and indexing the result data", () => {
      const mockSuccessPayload: PaginatedResult<Foo[]> = {
        items: [{ id: "id-1", name: "FOO 1" }, { id: "id-2", name: "FOO 2" }],
        pagination: { total: 2, pageSize: 2, pageIndex: 0 }
      };

      const expectedState = {
        items: {
          byId: {
            "id-1": { id: "id-1", name: "FOO 1" },
            "id-2": { id: "id-2", name: "FOO 2" }
          },
          idList: ["id-1", "id-2"],
          request: {
            status: RequestStatus.Fulfilled
          }
        },
        pagination: { total: 2, pageSize: 2, pageIndex: 0 }
      };

      expect(
        reducer(initialState, actions.fetchFoos.success(mockSuccessPayload))
      ).toEqual(expectedState);
    });
  });
});
