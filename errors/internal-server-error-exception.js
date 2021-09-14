const SimpleHttpException = require("./simple-http-exception");

class InternalServerErrorException extends SimpleHttpException {
  constructor(message) {
    super(message, "BAD_REQUEST", 500);
  }
}

module.exports = InternalServerErrorException;
