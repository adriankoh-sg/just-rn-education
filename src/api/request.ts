export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface RequestOptions {
  url: string;
  method?: RequestMethod;
  headers?: Record<string, string>;
  body?: any;
}

export const fetchData = async <T>(options: RequestOptions): Promise<T> => {
  const { method = RequestMethod.GET, headers = {}, body } = options;

  const response = await fetch(options.url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<T>;
};
