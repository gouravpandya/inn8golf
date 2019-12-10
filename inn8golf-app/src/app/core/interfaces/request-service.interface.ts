export interface RequestableServiceInterface {
	development: boolean;
	get(endpoint: string, params?: any, reqOpts?: any): Promise<any>;
	post(endpoint: string, body: any, reqOpts?: any): Promise<any>;
	put(endpoint: string, body: any, reqOpts?: any): Promise<any>;
	delete(endpoint: string, params?: any, reqOpts?: any): Promise<any>;
}
