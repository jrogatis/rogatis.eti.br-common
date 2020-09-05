import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super('invalid request parameters');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors() {
    return this.errors.map(({ msg, param }) => {
      return { message: msg, field: param };
    });
  }
}
