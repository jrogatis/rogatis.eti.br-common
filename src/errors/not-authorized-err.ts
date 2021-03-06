import { CustomError } from './custom-error';

export class NotAuthorizedErr extends CustomError {
  statusCode = 401;
  constructor() {
    super('Not authorized');
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, NotAuthorizedErr.prototype);
  }

  serializeErrors() {
    return [
      {
        message: 'Not Authorized',
      },
    ];
  }
}
