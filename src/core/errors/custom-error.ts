export interface ErrorResponse {
    message: string;
    code: number;
    data?: any;
}

export class CustomError extends Error {
    public code: number;
    public data?: any;

    constructor(message: string, code: number, data?: any) {
        super(message);
        this.code = code;
        this.data = data;
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    get response(): ErrorResponse {
        return {
            message: this.message,
            code: this.code,
            data: this.data,
        };
    }
}
