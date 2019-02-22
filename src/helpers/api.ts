import axios, { AxiosResponse } from "axios";

import { delay } from "@helpers/promise";
import { APIMockResult } from "@fixtures/api.mocks";

export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface RequestConfig<
  TPayload = any,
  TResult = any,
  TNewPayload = TPayload,
  TNewResult = TResult
> {
  transformPayload?: (payload: TPayload) => TNewPayload;
  transformResult?: (result: TResult) => TNewResult;
  transformEndpoint?: (payload: TNewPayload, endpoint: string) => string;
}

type RequestFn<TPayload, TNewResult> = TPayload extends void
  ? () => Promise<TNewResult>
  : (payload: TPayload) => Promise<TNewResult>;

/**
 * Creates a request function with the given HTTPVerb,
 * endpoint and optional config
 *
 * @param method - HTTP Method ("GET", "POST", "PUT", "DELETE", "PATCH")
 */
export const request = (method: HTTPMethod) => <
  TPayload = any,
  TResult = any,
  TNewPayload = TPayload,
  TNewResult = TResult
>(
  endppoint: string,
  config?: RequestConfig<TPayload, TResult, TNewPayload, TNewResult>
): RequestFn<TPayload, TNewResult> => {
  /**
   * Fires an http request and returns a promise of type T or an Error
   * @param payload
   */
  async function requestFn(payload: TPayload): Promise<TNewResult> {
    const $config = {
      transformPayload: (p: TPayload) => p,
      transformResult: (result: TResult) => result,
      transformEndpoint: (_: TNewPayload, endpoint: string) => endpoint,
      ...(config || {})
    };

    const $payload = $config.transformPayload(payload) as TNewPayload;
    const $endpoint = $config.transformEndpoint($payload, endppoint);

    const key = `${method}:${$endpoint}`;

    // if (process.env.NODE_ENV !== "production") {
    const mocks = require("@fixtures/api.mocks").default;

    if (key in mocks) {
      const response: APIMockResult<TResult> = mocks[key]($payload);

      console.log(
        `responding request "${key}" with mock response:`,
        response.data
      );

      return delay<TNewResult>(
        response.delay || 2000,
        () => $config.transformResult(response.data) as TNewResult
      );
    }
    // }

    let $result: AxiosResponse<TResult>;

    try {
      switch (method) {
        case "POST":
          $result = await axios.post<TResult>($endpoint, $payload);
          break;
        case "PUT":
          $result = await axios.put<TResult>($endpoint, $payload);
          break;
        case "PATCH":
          $result = await axios.patch<TResult>($endpoint, $payload);
          break;
        case "DELETE":
          $result = await axios.delete($endpoint, $payload);
          break;
        default:
          $result = await axios.get<TResult>($endpoint);
      }

      return $config.transformResult($result.data) as TNewResult;
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `An exception was thrown when requesting "${key}":`,
          error
        );
      }

      throw error;
    }
  }

  return requestFn as RequestFn<TPayload, TNewResult>;
};

export const get = request("GET");

export const post = request("POST");

export const put = request("PUT");

export const patch = request("PATCH");

export const remove = request("DELETE");
