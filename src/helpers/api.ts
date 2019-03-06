import Axios, { AxiosResponse } from "axios";

import { delay } from "@helpers/promise";
import ApiMockRouter, { MockHandlerConfig } from "@helpers/ApiMockRouter";
import { API_CONFIG } from "@domain/core";

export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export const parseAxiosRequest = <TResult, TPayload>(
  method: HTTPMethod,
  endpoint: string,
  payload: TPayload
) => {
  switch (method) {
    case "POST":
      return Axios.post<TResult>(endpoint, payload);
    case "PUT":
      return Axios.put<TResult>(endpoint, payload);
    case "PATCH":
      return Axios.patch<TResult>(endpoint, payload);
    case "DELETE":
      return Axios.delete(endpoint, payload);
    default:
      return Axios.get<TResult>(endpoint);
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

type Middleware<TPayload = any, TResult = any> = (
  params: {
    method: HTTPMethod;
    endpoint: string;
    payload: TPayload;
  },
  next?: Middleware<TPayload, TResult>
) => Promise<TResult>;

/**
 * Creates a request function with the given HTTPVerb,
 * endpoint and optional config
 *
 * @param method - HTTP Method ("GET", "POST", "PUT", "DELETE", "PATCH")
 */
export const request = (method: HTTPMethod, middleware?: Middleware) => <
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
      transformEndpoint: (_: TNewPayload, endpoint: string) =>
        endpoint.match(/^https?/) ? endpoint : `${API_CONFIG.HOST}${endpoint}`,
      ...(config || {})
    };

    const $payload = $config.transformPayload(payload) as TNewPayload;
    const $endpoint = $config.transformEndpoint($payload, endppoint);

    const key = `${method}:${$endpoint}`;

    const continuation: Middleware<TNewPayload, TNewResult> = async params => {
      try {
        const axiosRequest = parseAxiosRequest<TResult, TNewPayload>(
          params.method,
          params.endpoint,
          params.payload
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
    };

    const mocks: ApiMockRouter = require("@fixtures/mocks").default;

    const mock = mocks.match(method, $endpoint, payload);

    if (!!mock) {
      const response: MockHandlerConfig<TResult> = mock;

      console.log(
        `responding request "${key}" with mock response:`,
        response.data
      );

      return delay<TNewResult>(
        response.delay,
        () => $config.transformResult(response.data) as TNewResult
      );
    }

    const middlewareParams = {
      method,
      endpoint: $endpoint,
      payload: $payload
    };

    if (!!middleware) {
      return await middleware(middlewareParams, continuation);
    } else {
      return await continuation(middlewareParams);
    }
  }

  return requestFn as RequestFn<TPayload, TNewResult>;
};

export const get = request("GET");

export const post = request("POST");

export const put = request("PUT");

export const patch = request("PATCH");

export const remove = request("DELETE");

export class Client {
  private baseUrl: string;

  constructor(baseEndpoint: string) {
    this.baseUrl = baseEndpoint;
  }

  public request(method: HTTPMethod) {
    return <
      TPayload = any,
      TResult = any,
      TNewPayload = TPayload,
      TNewResult = TResult
    >(
      endpoint: string,
      config?: RequestConfig<TPayload, TResult, TNewPayload, TNewResult>
    ) => request(method)(`${this.baseUrl}${endpoint}`, config);
  }
}
