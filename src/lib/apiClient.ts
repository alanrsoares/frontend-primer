import axios, { AxiosResponse } from "axios";

import { delay } from "@helpers/promise";
import { API_CONFIG } from "@domain/core/constants";

import ApiMockRouter from "./ApiMockRouter";

export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export const parseAxiosRequest = <TResult, TPayload>(
  method: HTTPMethod,
  endpoint: string,
  payload: TPayload
) => {
  switch (method) {
    case "POST":
      return axios.post<TResult>(endpoint, payload);
    case "PUT":
      return axios.put<TResult>(endpoint, payload);
    case "PATCH":
      return axios.patch<TResult>(endpoint, payload);
    case "DELETE":
      return axios.delete(endpoint, payload);
    default:
      return axios.get<TResult>(endpoint);
  }
};

type RequestFn<TPayload, TNewResult> = TPayload extends void
  ? () => Promise<TNewResult>
  : (payload: TPayload) => Promise<TNewResult>;

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

/**
 * Creates a request function with the given HTTPVerb,
 * endpoint and optional config
 *
 * @param method - HTTP Method ("GET", "POST", "PUT", "DELETE", "PATCH")
 */
export const request = (method: HTTPMethod) => <
  TResult = any,
  TPayload = void,
  TNewPayload = TPayload,
  TNewResult = TResult
>(
  endpoint: string,
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
      transformEndpoint: (_: TNewPayload, oldEndpoint: string) => oldEndpoint,
      ...(config || {})
    };

    const $payload = $config.transformPayload(payload) as TNewPayload;
    const $endpoint = $config.transformEndpoint($payload, endpoint);

    // if (process.env.NODE_ENV !== "production") {
    const key = `${method}:${$endpoint}`;
    const mockApi: ApiMockRouter = require("@fixtures/mocks").mockApi;

    const fullEndpoint = `${API_CONFIG.HOST}${$endpoint}`;

    const match = mockApi.match(method, fullEndpoint, $payload);

    if (match) {
      const mockResult = $config.transformResult(match.data) as TNewResult;

      console.info(`responding ${key} with`, mockResult);

      return delay(match.delay, () => mockResult);
    }
    // }

    try {
      const axiosRequest = parseAxiosRequest<TResult, TNewPayload>(
        method,
        $endpoint,
        $payload
      );
      const $response: AxiosResponse<TResult> = await axiosRequest;

      return $config.transformResult($response.data) as TNewResult;
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
