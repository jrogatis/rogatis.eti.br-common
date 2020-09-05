import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  constructor(public message: string) {
    super(message);
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  statusCode = 400;

  serializeErrors() {
    return [{ message: this.message }];
  }
}
