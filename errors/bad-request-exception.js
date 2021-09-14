const SimpleHttpException = require("./simple-http-exception");

class BadRequestException extends SimpleHttpException {
  constructor(message) {
    super(message, "BAD_REQUEST", 400);
  }
}

module.exports = BadRequestException;
