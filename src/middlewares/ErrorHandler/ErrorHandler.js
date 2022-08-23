const { CustomError } = require('../../utils/CustomError/CustomError');

class ErrorHandler {
  constructor(defaultStatus = 500) {
    this.defaultStatus = defaultStatus;
  }

  handleError(error, _req, res, _next     ) {
    const errorStatus = error.status || this.defaultStatus;

    if (error instanceof CustomError) {
      return res.status(error.status).json({ message: error.message });
    }

    return res.status(errorStatus).json({ message: error.message });
  }
}

module.exports = {
  ErrorHandler,
};
