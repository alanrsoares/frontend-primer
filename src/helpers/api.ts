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

export const request = (method: string) => <
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
    const mocks = require("../__mocks__/api.mocks").default;

    console.log({ key, mocks });

    if (key in mocks) {
      const response = mocks[key]($payload);

      console.log(`responding request "${key}" with mock response:`, response);
      return Promise.resolve(response.items);
    }
  }

  const $result = await fetch($endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify($payload)
  });

  const json = (await $result.json()) as TResult;

  return $config.transformResult(json) as TNewResult;
};

export const get = request("GET");

export const post = request("POST");

export const put = request("PUT");

export const patch = request("PATCH");

export const remove = request("DELETE");
