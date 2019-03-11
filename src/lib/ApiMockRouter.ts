import { HTTPMethod } from "./apiClient";

export interface MockHandlerConfig<TData = any> {
  delay: number;
  status: number;
  data: TData;
  headers: object;
}

export type ApiMockHandler<TData = any, TArgs = void, TBody = any> = (
  args: TArgs,
  body: TBody
) => Partial<MockHandlerConfig<TData>>;

export interface Route<T = any> {
  path: string;
  placeholders: string[];
  pattern: RegExp;
  handler: ApiMockHandler<T, any>;
}

const mockHandlerConfigDefaults: MockHandlerConfig = {
  delay: 300,
  status: 200,
  data: {},
  headers: {}
};

export default class ApiMockRouter {
  public routes: { [id: string]: Route[] } = {};

  public baseUrl = "";

  constructor(baseApiUrl: string) {
    this.baseUrl = baseApiUrl;
  }

  public register = (method: HTTPMethod) => {
    return <TArgs, TData = any, TBody = any>(
      pattern: string,
      handler: ApiMockHandler<TData, TArgs, TBody>
    ) => {
      const path = `${this.baseUrl}${pattern}`;
      const placeholders: string[] = [];
      const body = path.replace(/:(\w+)/g, (_, x) => {
        placeholders.push(x);
        return `(\\w+)`;
      });
      const route = {
        path,
        handler,
        placeholders,
        pattern: new RegExp(`^${body}$`, "i")
      };

      if (method in this.routes) {
        this.routes[method].push(route);
      } else {
        this.routes[method] = [route];
      }

      return this;
    };
  };

  public get = this.register("GET");
  public post = this.register("POST");
  public put = this.register("PUT");
  public patch = this.register("PATCH");
  public delete = this.register("DELETE");

  public match<TBody = any>(
    method: HTTPMethod,
    url: string,
    body?: TBody
  ): MockHandlerConfig | undefined {
    if (!(method in this.routes)) {
      return;
    }

    const candidates = this.routes[method];
    const candidate = candidates.find(route => route.pattern.test(url));

    if (!candidate) {
      return;
    }

    const parsed = candidate.pattern.exec(url);
    const args =
      !!parsed && parsed.length > 1
        ? parsed
            .slice(1)
            .reduce(
              (acc, x, i) => ({ ...acc, [candidate.placeholders[i]]: x }),
              {}
            )
        : undefined;

    return {
      ...mockHandlerConfigDefaults,
      ...candidate.handler(args, body)
    };
  }
}
