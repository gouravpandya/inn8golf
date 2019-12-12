export class ApiResponse {
    message: string;

    didError: boolean;

    errorMessage: string;
}

export class SingleResponse {
    message: string;

    didError: boolean;

    errorMessage: string;

    model: any;
}

export class ListResponse {
    message: string;

    didError: boolean;

    errorMessage: string;

    model: any[];
}
