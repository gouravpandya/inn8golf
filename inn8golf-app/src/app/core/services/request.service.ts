import { Injectable } from '@angular/core';

import { RequestableServiceInterface } from '../interfaces/request-service.interface';
import { ApiService } from './api.service';

@Injectable({
	providedIn: 'root'
})

export class RequestService {

	private activeService: RequestableServiceInterface;

	constructor(
		private apiService: ApiService,
	) {
		this.activeService = this.apiService;
	}

	public get(endpoint: string, params?: any, reqOpts?: any): Promise<any> {
		return this.activeService.get(endpoint, params, reqOpts);
	}

	public post(endpoint: string, body: any, reqOpts?: any): Promise<any> {
		return this.activeService.post(endpoint, body, reqOpts);
	}

	public put(endpoint: string, body: any, reqOpts?: any): Promise<any> {
		return this.activeService.put(endpoint, body, reqOpts);
	}

	public delete(endpoint: string, params?: any, reqOpts?: any): Promise<any> {
		return this.activeService.delete(endpoint, params, reqOpts);
	}
}
