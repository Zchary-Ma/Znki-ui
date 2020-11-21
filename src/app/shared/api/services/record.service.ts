/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateRecordDto } from '../models/create-record-dto';
import { GetManyRecordResponseDto } from '../models/get-many-record-response-dto';
import { Record } from '../models/record';

@Injectable({
  providedIn: 'root',
})
export class RecordService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getOneBaseRecordControllerRecord
   */
  static readonly GetOneBaseRecordControllerRecordPath = '/api/record/{id}';

  /**
   * Retrieve one Record.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOneBaseRecordControllerRecord()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOneBaseRecordControllerRecord$Response(params: {
    id: number;

    /**
     * Selects resource fields. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#select&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    fields?: Array<string>;

    /**
     * Adds relational resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#join&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    join?: Array<string>;

    /**
     * Reset cache (if was enabled). &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#cache&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    cache?: number;

  }): Observable<StrictHttpResponse<Record>> {

    const rb = new RequestBuilder(this.rootUrl, RecordService.GetOneBaseRecordControllerRecordPath, 'get');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('fields', params.fields, {"style":"form"});
      rb.query('join', params.join, {"style":"form","explode":true});
      rb.query('cache', params.cache, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Record>;
      })
    );
  }

  /**
   * Retrieve one Record.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOneBaseRecordControllerRecord$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOneBaseRecordControllerRecord(params: {
    id: number;

    /**
     * Selects resource fields. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#select&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    fields?: Array<string>;

    /**
     * Adds relational resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#join&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    join?: Array<string>;

    /**
     * Reset cache (if was enabled). &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#cache&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    cache?: number;

  }): Observable<Record> {

    return this.getOneBaseRecordControllerRecord$Response(params).pipe(
      map((r: StrictHttpResponse<Record>) => r.body as Record)
    );
  }

  /**
   * Path part for operation replaceOneBaseRecordControllerRecord
   */
  static readonly ReplaceOneBaseRecordControllerRecordPath = '/api/record/{id}';

  /**
   * Replace one Record.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceOneBaseRecordControllerRecord()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceOneBaseRecordControllerRecord$Response(params: {
    id: number;
      body: Record
  }): Observable<StrictHttpResponse<Record>> {

    const rb = new RequestBuilder(this.rootUrl, RecordService.ReplaceOneBaseRecordControllerRecordPath, 'put');
    if (params) {

      rb.path('id', params.id, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Record>;
      })
    );
  }

  /**
   * Replace one Record.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `replaceOneBaseRecordControllerRecord$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceOneBaseRecordControllerRecord(params: {
    id: number;
      body: Record
  }): Observable<Record> {

    return this.replaceOneBaseRecordControllerRecord$Response(params).pipe(
      map((r: StrictHttpResponse<Record>) => r.body as Record)
    );
  }

  /**
   * Path part for operation deleteOneBaseRecordControllerRecord
   */
  static readonly DeleteOneBaseRecordControllerRecordPath = '/api/record/{id}';

  /**
   * Delete one Record.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOneBaseRecordControllerRecord()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOneBaseRecordControllerRecord$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RecordService.DeleteOneBaseRecordControllerRecordPath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Delete one Record.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteOneBaseRecordControllerRecord$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOneBaseRecordControllerRecord(params: {
    id: number;

  }): Observable<void> {

    return this.deleteOneBaseRecordControllerRecord$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getManyBaseRecordControllerRecord
   */
  static readonly GetManyBaseRecordControllerRecordPath = '/api/record';

  /**
   * Retrieve many Record.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getManyBaseRecordControllerRecord()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManyBaseRecordControllerRecord$Response(params?: {

    /**
     * Selects resource fields. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#select&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    fields?: Array<string>;

    /**
     * Adds search condition. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#search&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    's'?: string;

    /**
     * Adds filter condition. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#filter&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    filter?: Array<string>;

    /**
     * Adds OR condition. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#or&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    or?: Array<string>;

    /**
     * Adds sort by field. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#sort&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    sort?: Array<string>;

    /**
     * Adds relational resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#join&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    join?: Array<string>;

    /**
     * Limit amount of resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#limit&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    limit?: number;

    /**
     * Offset amount of resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#offset&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    offset?: number;

    /**
     * Page portion of resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#page&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    page?: number;

    /**
     * Reset cache (if was enabled). &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#cache&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    cache?: number;

  }): Observable<StrictHttpResponse<GetManyRecordResponseDto | Array<Record>>> {

    const rb = new RequestBuilder(this.rootUrl, RecordService.GetManyBaseRecordControllerRecordPath, 'get');
    if (params) {

      rb.query('fields', params.fields, {"style":"form"});
      rb.query('s', params['s'], {});
      rb.query('filter', params.filter, {"style":"form","explode":true});
      rb.query('or', params.or, {"style":"form","explode":true});
      rb.query('sort', params.sort, {"style":"form","explode":true});
      rb.query('join', params.join, {"style":"form","explode":true});
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('page', params.page, {});
      rb.query('cache', params.cache, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetManyRecordResponseDto | Array<Record>>;
      })
    );
  }

  /**
   * Retrieve many Record.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getManyBaseRecordControllerRecord$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManyBaseRecordControllerRecord(params?: {

    /**
     * Selects resource fields. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#select&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    fields?: Array<string>;

    /**
     * Adds search condition. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#search&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    's'?: string;

    /**
     * Adds filter condition. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#filter&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    filter?: Array<string>;

    /**
     * Adds OR condition. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#or&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    or?: Array<string>;

    /**
     * Adds sort by field. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#sort&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    sort?: Array<string>;

    /**
     * Adds relational resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#join&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    join?: Array<string>;

    /**
     * Limit amount of resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#limit&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    limit?: number;

    /**
     * Offset amount of resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#offset&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    offset?: number;

    /**
     * Page portion of resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#page&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    page?: number;

    /**
     * Reset cache (if was enabled). &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#cache&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    cache?: number;

  }): Observable<GetManyRecordResponseDto | Array<Record>> {

    return this.getManyBaseRecordControllerRecord$Response(params).pipe(
      map((r: StrictHttpResponse<GetManyRecordResponseDto | Array<Record>>) => r.body as GetManyRecordResponseDto | Array<Record>)
    );
  }

  /**
   * Path part for operation createOneBaseRecordControllerRecord
   */
  static readonly CreateOneBaseRecordControllerRecordPath = '/api/record';

  /**
   * Create one Record.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createOneBaseRecordControllerRecord()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOneBaseRecordControllerRecord$Response(params: {
      body: CreateRecordDto
  }): Observable<StrictHttpResponse<Record>> {

    const rb = new RequestBuilder(this.rootUrl, RecordService.CreateOneBaseRecordControllerRecordPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Record>;
      })
    );
  }

  /**
   * Create one Record.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createOneBaseRecordControllerRecord$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOneBaseRecordControllerRecord(params: {
      body: CreateRecordDto
  }): Observable<Record> {

    return this.createOneBaseRecordControllerRecord$Response(params).pipe(
      map((r: StrictHttpResponse<Record>) => r.body as Record)
    );
  }

}
