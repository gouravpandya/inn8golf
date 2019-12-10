import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout, retry } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
	constructor() { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const t = +request.headers.get('Timeout') || 60000; // expose user setting
		const r = +request.headers.get('Retry') || 1; // expose user setting
		return next.handle(request).pipe(
			retry(r), // expose user setting
			timeout(t),
		);
	}
}
