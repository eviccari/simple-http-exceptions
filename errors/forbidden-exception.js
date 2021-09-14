const SimpleHttpException = require("./simple-http-exception");

class UnauthorizedException extends SimpleHttpException {
  constructor(message) {
    super(message, "FORBIDDEN", 403);
  }
}

module.exports = UnauthorizedException;
