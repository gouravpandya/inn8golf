import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import * as Global from './../../globalvariable/global';
import { Building } from './building-level.model';
import { Observable } from 'rxjs';
import { ListResponse, SingleResponse, ApiResponse } from '../../common/model/api-response.model';
@Injectable({
  providedIn: 'root'
})
export class BuildingLevelService {
  private APIURL: string = Global.APIURL + '/building-level';
  constructor(private http: HttpClient) { }

  get(siteRefNo: string): Observable<HttpResponse<ListResponse>> {
    return this.http.get<ListResponse>(`${this.APIURL}/${siteRefNo}`, { observe: 'response' });
  }
  getById(buildingId: number): Observable<HttpResponse<SingleResponse>> {
    return this.http.get<SingleResponse>(`${this.APIURL}/getById/${buildingId}`, { observe: 'response' });
  }
  getAllLevel(siteRefNo: string): Observable<HttpResponse<ListResponse>> {
    return this.http.get<ListResponse>(`${this.APIURL}/getAllLevel/${siteRefNo}`, { observe: 'response' });
  }
  getBuildingWithoutTenant(siteRefNo: string): Observable<HttpResponse<ListResponse>> {
    return this.http.get<ListResponse>(`${this.APIURL}/getBuildingWithoutTenant/${siteRefNo}`, { observe: 'response' });
  }
  post(building: Building): Observable<HttpResponse<SingleResponse>> {
    return this.http.post<SingleResponse>(this.APIURL, building, { observe: 'response' });
  }
  delete(tenantId: number): Observable<HttpResponse<ApiResponse>> {
    return this.http.delete<ApiResponse>(`${this.APIURL}/${tenantId}`, {
      observe: 'response'
    });
  }
  checkBuildingAlreadyExists(building: Building): Observable<HttpResponse<SingleResponse>> {
    return this.http.post<SingleResponse>(`${this.APIURL}/checkBuildingAlreadyExists`, building, { observe: 'response' });
  }
}

