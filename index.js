const SimpleHttpException = require("./errors/simple-http-exception");
const NotFoundException = require("./errors/not-found-exception");
const ForbiddenException = require("./errors/forbidden-exception");
const BadRequestException = require("./errors/bad-request-exception");
const InternalServerErrorException = require("./errors/internal-server-error-exception");
const UnauthorizedException = require("./errors/unauthorized-exception");
const UnprocessableEntityException = require("./errors/unprocessable-entity-exception");

/**
 * List base errors name and either http status
 */
describe = function () {
  const classes = [
    new SimpleHttpException(),
    new NotFoundException(),
    new BadRequestException(),
    new ForbiddenException(),
    new InternalServerErrorException(),
    new UnauthorizedException(),
    new UnprocessableEntityException(),
  ];

  classes.forEach((c) => {
    console.log(`Error name: ${c._name} http status: ${c._httpStatus}`);
  });
};

module.exports = describe;
