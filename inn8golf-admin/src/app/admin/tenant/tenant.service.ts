import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tenant } from './tenant.model';

import * as Global from '../../globalvariable/global';
import { ListResponse, SingleResponse, ApiResponse } from '../../common/model/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  private apiUrl: string = Global.APIURL + '/tenant';

  constructor(private httpClient: HttpClient) { }

  get(): Observable<HttpResponse<ListResponse>> {
    return this.httpClient.get<ListResponse>(`${this.apiUrl}`, { observe: 'response' });
  }

  getById(tenantId: number): Observable<HttpResponse<SingleResponse>> {
    return this.httpClient.get<SingleResponse>(`${this.apiUrl}/${tenantId}`, { observe: 'response' });
  }

  post(tenant: Tenant): Observable<HttpResponse<SingleResponse>> {
    return this.httpClient.post<SingleResponse>(`${this.apiUrl}`, tenant, { observe: 'response' });
  }

  delete(tenantId: number): Observable<HttpResponse<ApiResponse>> {
    return this.httpClient.delete<ApiResponse>(`${this.apiUrl}/${tenantId}`, { observe: 'response' });
  }

  checkIsExists(tenant: Tenant): Observable<HttpResponse<SingleResponse>> {
    return this.httpClient.post<SingleResponse>(`${this.apiUrl}/checkIsExists`, tenant, { observe: 'response' });
  }
}
