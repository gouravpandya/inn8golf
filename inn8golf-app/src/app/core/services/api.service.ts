import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { DEVELOPMENT_URL, PRODUCTION_URL } from '../globals';
import { RequestableServiceInterface } from '../interfaces/request-service.interface';
import { AppError } from '../models/app-error.model';
import { TimeoutError } from 'rxjs';

export const ERR_API_UNAUTHORIZED: AppError = new AppError({
	header: 'Session Timed Out',
	message: 'The current session has timed out due to inactivity. You will be redirected to the login page.',
	code: 'A01',
	redirect: 'login',
	original: null
});

export const ERR_API_PROBLEM: AppError = new AppError({
	header: 'Something went wrong!',
	message: 'ManageAmerica encountered an error while processing a request. If the problem persists, contact support desk with the following information:',
	code: 'A02',
	redirect: null,
	original: null
});

export const ERR_API_NOT_FOUND: AppError = new AppError({
	header: 'Not Found',
	message: 'The requested resource was not available from ManageAmerica: ',
	code: 'A03',
	redirect: null,
	original: null
});

export const ERR_API_TIMEOUT: AppError = new AppError({
	header: 'Trouble connecting',
	message: 'The application is having trouble connecting to ManageAmerica.',
	code: 'A04',
	redirect: null,
	original: null
});

@Injectable({
	providedIn: 'root',
})
export class ApiService implements RequestableServiceInterface {

	public development: boolean = true;

	private token: string;
	private apiRoute: string = 'api/mobile/';

	constructor(
		private httpClient: HttpClient,
	) {
	}

	public async get(endpoint: string, params?: any, reqOpts?: any): Promise<any> {
		reqOpts = this.parseOptions(reqOpts);
		const url = this.apiUrl + endpoint;
		return this.httpClient.get(url, reqOpts).toPromise().catch(this.handleError.bind(this));
	}

	public async post(endpoint: string, body: any, reqOpts?: any): Promise<any> {
		reqOpts = this.parseOptions(reqOpts);
		const url = this.apiUrl + endpoint;
		return this.httpClient.post(url, body, reqOpts).toPromise().catch(this.handleError.bind(this));
	}

	public put(endpoint: string, body: any, reqOpts?: any): Promise<any> {
		reqOpts = this.parseOptions(reqOpts);
		const url = this.apiUrl + endpoint;
		return this.httpClient.put(url, body, reqOpts).toPromise().catch(this.handleError.bind(this));
	}

	public delete(endpoint: string, params?: any, reqOpts?: any): Promise<any> {
		reqOpts = this.parseOptions(reqOpts);
		const url = this.apiUrl + endpoint;
		return this.httpClient.delete(url, reqOpts).toPromise().catch(this.handleError.bind(this));
	}

	private get apiUrl(): string {
		return (this.development ? DEVELOPMENT_URL : PRODUCTION_URL) + this.apiRoute;
	}

	private get headers(): HttpHeaders {
		return new HttpHeaders({ Authorization: this.token });
	}

	private parseOptions(reqOpts: any, params?: any): any {
		if (!reqOpts) {
			reqOpts = {
				params: new HttpParams()
			};
		}
		if (params) {
			reqOpts.params = new HttpParams();
			for (const key in params) {
				if (params.hasOwnProperty(key)) {
					reqOpts.params = reqOpts.params.set(key, params[key]);
				}
			}
		}
		reqOpts.headers = this.headers;
		return reqOpts;
	}

	private handleError(err: HttpErrorResponse | TimeoutError): AppError {
		let appError: AppError = new AppError();

		if (err instanceof TimeoutError) {
			appError = ERR_API_TIMEOUT;
		} else {
			switch (err.status) {
				case 401:
					appError = ERR_API_UNAUTHORIZED;
					break;
				case 408:
					appError = ERR_API_TIMEOUT;
					break;
				case 404:
					appError = ERR_API_NOT_FOUND;
					appError.message += err.url;
					break;
				default:
					appError = ERR_API_PROBLEM;
			}
		}
		appError.original = err;
		throw appError;
	}
}
