import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zone } from './zone.model';

import * as Global from '../../globalvariable/global';
import { ListResponse, SingleResponse, ApiResponse } from '../../common/model/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  private apiUrl: string = Global.APIURL + '/zone';

  constructor(private httpClient: HttpClient) { }

  get(siteRefNo: string): Observable<HttpResponse<ListResponse>> {
    return this.httpClient.get<ListResponse>(`${this.apiUrl}/${siteRefNo}`, { observe: 'response' });
  }

  getById(zoneId: number): Observable<HttpResponse<SingleResponse>> {
    return this.httpClient.get<SingleResponse>(`${this.apiUrl}/getZoneById/${zoneId}`, { observe: 'response' });
  }

  getZonesByBuildingId(buildingId: number): Observable<HttpResponse<ListResponse>> {
    return this.httpClient.get<ListResponse>(`${this.apiUrl}/getZonesByBuildingId/${buildingId}`, { observe: 'response' });
  }

  post(zone: Zone): Observable<HttpResponse<SingleResponse>> {
    return this.httpClient.post<SingleResponse>(`${this.apiUrl}`, zone, { observe: 'response' });
  }

  delete(zoneId: number): Observable<HttpResponse<ApiResponse>> {
    return this.httpClient.delete<ApiResponse>(`${this.apiUrl}/${zoneId}`, { observe: 'response' });
  }

  checkZoneNameExists(zone: Zone): Observable<HttpResponse<SingleResponse>> {
    return this.httpClient.post<SingleResponse>(`${this.apiUrl}/checkZoneNameExists/${zone.zoneName}/${zone.zoneId}`, zone, { observe: 'response' });
  }
}
