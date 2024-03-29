# Simple Http Exceptions

## Objective

To supply basic classes with minimal http error status model. This is helpful in REST APIs implementation scenario to standardize return codes.

<h2></h2>
&nbsp;

## How to use

Throw an specific HttpException instance for an specific scenario:

```javascript
//import then
const NotFoundException = require("simple-http-exceptions/errors/not-found-exception");

//...omitted code

//Simple example with express framework
app.get("/api/find/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await entityServer.findById(id);

    if (data === null) {
      throw new NotFoundException("Entity not found"); // ### Here is the trick ###
    }

    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(error._httpStatus) // ### assume 404 http status ###
      .json({ message: error.message, errorType: error._name });
  }
});
```

Alternatively, you could implements a centralized error handler in a middleware:

```javascript
/**
 * To handle all errors that have been throw
 * @param error
 * @param req
 * @param res
 * @param next
 * @returns {response}
 */
module.exports = function (error, req, res, next) {
  if (error._httpStatus === 500) {
    logger.error(error.stack);
  } else {
    logger.error(error.message);
  }

  return res.status(error._httpStatus).json({
    message: error.message,
    errorType: error._httpStatus,
  });
};
```

If you need more custom error map class, could you implement SimpleHttpException by yourself:

```javascript
const SimpleHttpException = require("simple-http-exception");

class MyCustomHttpException extends SimpleHttpException {
  constructor(message) {
    super(message, "MY_CUSTOM_HTTP_ERROR", 666);
  }
}

module.exports = MyCustomHttpException;
```

<h2></h2>
&nbsp;

## Errors actually implemented

| Class                        | httpStatus | name                  |
| ---------------------------- | ---------- | --------------------- |
| BadRequestException          | 400        | BAD_REQUEST           |
| UnauthorizedException        | 401        | UNAUTHORIZED          |
| ForbiddenException           | 403        | FORBIDDEN             |
| NotFoundException            | 404        | NOT_FOUND             |
| UnprocessableEntityException | 422        | UNPROCESSABLE_ENTITY  |
| InternalServerErrorException | 500        | INTERNAL_SERVER_ERROR |

&nbsp;

> ### REPOSITORY

```https
https://github.com/eviccari/simple-http-exceptions
```

&nbsp;

> #### ENVOLVED TECHNOLOGIES

- NodeJS 14
- Javascript
- Node Package Management

&nbsp;

> #### MASTER DEPENDENCIES

&nbsp;

> ### ROADMAP
