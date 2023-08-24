/* eslint-disable no-unused-vars */
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  HEAD = 'HEAD',
}

export interface IHttpRequest<Request> {
  url: string;
  method: HttpMethod;
  data?: Request;
  headers?: any;
}

export interface IHttpRequestWithoutMethod<Request = any> {
  url: string;
  data?: Request;
  headers?: any;
}

export interface IHttpGetRequest<Request = any>
  extends IHttpRequestWithoutMethod<Request> {
  method?: HttpMethod.GET;
}

export interface IHttpPostRequest<Request = any>
  extends IHttpRequestWithoutMethod<Request> {
  method?: HttpMethod.POST;
}

export interface IHttpPutRequest<Request = any>
  extends IHttpRequestWithoutMethod<Request> {
  method?: HttpMethod.PUT;
}

export interface IHttpPatchRequest<Request = any>
  extends IHttpRequestWithoutMethod<Request> {
  method?: HttpMethod.PATCH;
}

export interface IHttpDeleteRequest<Request = any>
  extends IHttpRequestWithoutMethod<Request> {
  method?: HttpMethod.DELETE;
}

export interface IHttpResponse<Response> {
  data: Response;
  status: number;
  statusText: string;
  headers: any;
}

export type IHttpResponseSuccess<Data> = IHttpResponse<Data>;

export interface IHttpResponseError<Data> extends IHttpResponse<Data> {
  error?: any;
}

export interface IHttpClient {
  request<Request, Response>(
    request: IHttpRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>>;

  get<Request, Response>(
    request: IHttpGetRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>>;

  post<Request, Response>(
    request: IHttpPostRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>>;

  put<Request, Response>(
    request: IHttpPutRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>>;

  patch<Request, Response>(
    request: IHttpPatchRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>>;

  delete<Request, Response>(
    request: IHttpDeleteRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>>;

  options<Request, Response>(
    request: IHttpRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>>;

  head<Request, Response>(
    request: IHttpRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>>;
}
