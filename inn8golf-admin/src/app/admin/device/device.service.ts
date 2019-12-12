import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from './device.model';

import * as Global from '../../globalvariable/global';
import { ListResponse, SingleResponse, ApiResponse } from '../../common/model/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private apiUrl: string = Global.APIURL + '/device';

  constructor(private httpClient: HttpClient) { }

  get(siteRefNo: string): Observable<HttpResponse<ListResponse>> {
    return this.httpClient.get<ListResponse>(`${this.apiUrl}/${siteRefNo}`, { observe: 'response' });
  }

  getDeviceListFromEvexia(): Observable<HttpResponse<ListResponse>> {
    return this.httpClient.get<ListResponse>(`${this.apiUrl}/getDeviceListFromEvexia`, { observe: 'response' });
  }

  getDeviceByMAC(macAddress: string): Observable<HttpResponse<SingleResponse>> {
    return this.httpClient.get<SingleResponse>(`${this.apiUrl}/getDeviceByMAC/${macAddress}`, { observe: 'response' });
  }

  getById(deviceId: number): Observable<HttpResponse<SingleResponse>> {
    return this.httpClient.get<SingleResponse>(`${this.apiUrl}/getDeviceById/${deviceId}`, { observe: 'response' });
  }

  post(device: Device): Observable<HttpResponse<SingleResponse>> {
    return this.httpClient.post<SingleResponse>(`${this.apiUrl}`, device, { observe: 'response' });
  }

  delete(deviceId: number): Observable<HttpResponse<ApiResponse>> {
    return this.httpClient.delete<ApiResponse>(`${this.apiUrl}/${deviceId}`, { observe: 'response' });
  }

  checkDeviceNameExists(device: Device): Observable<HttpResponse<SingleResponse>> {
    return this.httpClient.post<SingleResponse>(`${this.apiUrl}/checkDeviceNameExists/${device.deviceName}/${device.deviceId}`, device, { observe: 'response' });
  }
}
