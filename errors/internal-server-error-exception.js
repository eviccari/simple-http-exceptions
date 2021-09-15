const SimpleHttpException = require("./simple-http-exception");

class InternalServerErrorException extends SimpleHttpException {
  constructor(message) {
    super(message, "INTERNAL_SERVER_ERROR", 500);
  }
}

module.exports = InternalServerErrorException;
