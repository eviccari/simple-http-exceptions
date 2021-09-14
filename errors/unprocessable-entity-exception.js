const SimpleHttpException = require("./simple-http-exception");

class UnprocessableEntityException extends SimpleHttpException {
  constructor(message) {
    super(message, "UNPROCESSABLE_ENTITY", 422);
  }
}

module.exports = UnprocessableEntityException;
