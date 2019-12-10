import { HttpErrorResponse } from '@angular/common/http';

export class AppError {
	header: string;
	message: string;
	code: string;
	redirect: string;
	original: Error | HttpErrorResponse;
	constructor(appError?: AppError) {
		if (appError) {
			this.header = appError.header;
			this.message = appError.message;
			this.code = appError.code;
			this.redirect = appError.redirect;
			this.original = appError.original;
		}
	}
}
