import { Injectable, ErrorHandler, Injector } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class ErrorHandlingService extends ErrorHandler {
	constructor(private injector: Injector) {
		super();
	}
	handleError(error: any) {
		console.error(error);
		super.handleError(error);
	}
}
