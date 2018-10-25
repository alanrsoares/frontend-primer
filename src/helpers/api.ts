import axios, { AxiosResponse } from "axios";

import { delay } from "redux-saga";

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

export const request = (method: HTTPMethod) => <
  TPayload = any,
  TResult = any,
  TNewPayload = TPayload,
  TNewResult = TResult
>(
  endppoint: string,
  config?: RequestConfig<TPayload, TResult, TNewPayload, TNewResult>
) => async (payload: TPayload): Promise<TNewResult> => {
  const $config = {
    transformPayload: (p: TPayload) => p,
    transformResult: (result: TResult) => result,
    transformEndpoint: (_: TNewPayload, endpoint: string) => endpoint,
    ...(config || {})
  };

  const $payload = $config.transformPayload(payload) as TNewPayload;
  const $endpoint = $config.transformEndpoint($payload, endppoint);

  const key = `${method}:${$endpoint}`;

  if (process.env.NODE_ENV !== "production") {
    interface MockResponse {
      delay: number;
      data: TResult;
    }

    const mocks = require("../__mocks__/api.mocks").default;

    if (key in mocks) {
      const response: MockResponse = mocks[key]($payload);

      console.log(
        `responding request "${key}" with mock response:`,
        response.data
      );

      return delay(response.delay || 2000, $config.transformResult(
        response.data
      ) as TNewResult);
    }
  }

  let $result: AxiosResponse<TResult>;

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
};

export const get = request("GET");

export const post = request("POST");

export const put = request("PUT");

export const patch = request("PATCH");

export const remove = request("DELETE");
