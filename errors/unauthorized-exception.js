const SimpleHttpException = require("./simple-http-exception");

class UnauthorizedException extends SimpleHttpException {
  constructor(message) {
    super(message, "UNAUTHORIZED", 401);
  }
}

module.exports = UnauthorizedException;
