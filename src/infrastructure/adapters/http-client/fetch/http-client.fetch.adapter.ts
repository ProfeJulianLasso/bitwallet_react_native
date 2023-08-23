import {NetworkException} from '../../../exceptions';
import {
  HttpMethod,
  IHttpClient,
  IHttpDeleteRequest,
  IHttpGetRequest,
  IHttpPatchRequest,
  IHttpPostRequest,
  IHttpPutRequest,
  IHttpRequest,
  IHttpResponseSuccess,
} from '../../interfaces';

export class HttpClientFetch implements IHttpClient {
  private _headers: any;

  constructor({headers}: {headers?: any}) {
    if (headers) this.headers = headers;
  }

  set headers(headers: any) {
    this._headers = headers;
  }

  get headers() {
    return this._headers;
  }

  request<Response, Request = any>(
    request: IHttpRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>> {
    const response = {} as IHttpResponseSuccess<Response>;
    return fetch(request.url, {
      method: request.method,
      body: JSON.stringify(request.data),
      headers: {...this.headers, ...request.headers},
    })
      .then(res => {
        response.status = res.status;
        response.statusText = res.statusText;
        response.headers = res.headers;
        return res.json();
      })
      .then(data => {
        response.data = data as Response;
        return response;
      })
      .catch(error => {
        throw new NetworkException(error.message);
      });
  }

  get<Response, Request = any>(
    request: IHttpGetRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>> {
    return this.request<Response, Request>({
      ...request,
      method: HttpMethod.GET,
    });
  }

  post<Response, Request = any>(
    request: IHttpPostRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>> {
    return this.request<Response, Request>({
      ...request,
      method: HttpMethod.POST,
    });
  }

  put<Response, Request = any>(
    request: IHttpPutRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>> {
    return this.request<Response, Request>({
      ...request,
      method: HttpMethod.PUT,
    });
  }

  patch<Response, Request = any>(
    request: IHttpPatchRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>> {
    return this.request<Response, Request>({
      ...request,
      method: HttpMethod.PATCH,
    });
  }

  delete<Response, Request = any>(
    request: IHttpDeleteRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>> {
    return this.request<Response, Request>({
      ...request,
      method: HttpMethod.DELETE,
    });
  }

  options<Response, Request = any>(
    request: IHttpRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>> {
    return this.request<Response, Request>({
      ...request,
      method: HttpMethod.OPTIONS,
    });
  }

  head<Response, Request = any>(
    request: IHttpRequest<Request>,
  ): Promise<IHttpResponseSuccess<Response>> {
    return this.request<Response, Request>({
      ...request,
      method: HttpMethod.HEAD,
    });
  }
}
