import { CustomError } from './custom-error';
export declare class NotAuthorizedErr extends CustomError {
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
