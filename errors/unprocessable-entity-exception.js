const SimpleHttpException = require("./simple-http-exception");

class UnprocessableEntityException extends SimpleHttpException {
  constructor(message) {
    super(message, "BAD_REQUEST", 422);
  }
}

module.exports = UnprocessableEntityException;
