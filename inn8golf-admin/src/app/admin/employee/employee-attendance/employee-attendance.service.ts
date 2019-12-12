import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as Global from '../../../globalvariable/global';
import { ListResponse, SingleResponse, ApiResponse } from '../../../common/model/api-response.model';
import { EmployeeAttendance } from '../model/employee-attendance.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAttendanceService {

  private apiUrl: string = Global.APIURL + '/employee-attendance';

  constructor(private httpClient: HttpClient) { }

  get(): Observable<HttpResponse<ListResponse>> {
    return this.httpClient.get<ListResponse>(`${this.apiUrl}`, { observe: 'response' });
  }

  getById(employeeId: number): Observable<HttpResponse<SingleResponse>> {
    return this.httpClient.get<SingleResponse>(`${this.apiUrl}/${employeeId}`, { observe: 'response' });
  }

  getEmployeesById(zoneId: number): Observable<HttpResponse<SingleResponse>> {
    return this.httpClient.get<SingleResponse>(`${this.apiUrl}/${zoneId}`, { observe: 'response' });
  }
  post(model: EmployeeAttendance[]): Observable<HttpResponse<SingleResponse>> {
    return this.httpClient.post<SingleResponse>(`${this.apiUrl}`, model, { observe: 'response' });
  }

  delete(employeeId: number): Observable<HttpResponse<ApiResponse>> {
    return this.httpClient.delete<ApiResponse>(`${this.apiUrl}/${employeeId}`, { observe: 'response' });
  }

  checkIsExists(employee: EmployeeAttendance): Observable<HttpResponse<SingleResponse>> {
    return this.httpClient.post<SingleResponse>(`${this.apiUrl}/checkIsExists`, employee, { observe: 'response' });
  }
}
