const SimpleHttpException = require("./simple-http-exception");

class NotFoundException extends SimpleHttpException {
  constructor(message) {
    super(message, "NOT_FOUND", 404);
  }
}

module.exports = NotFoundException;
