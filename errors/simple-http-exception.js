class SimpleHttpException extends Error {
  /**
   * Constructor for instantiate a new HttpException
   * - The httpStatus must be represent status code for response
   * @param {string} message
   * @param {string} name
   * @param {number} httpStatus
   */
  constructor(message, name, httpStatus) {
    super(message);
    this.name =
      name === undefined || name === null
        ? "SIMPLE_HTTP_EXCEPTION_(BASE_CLASS)"
        : name;
    this.httpStatus =
      httpStatus === undefined || httpStatus === null ? 500 : httpStatus;
  }

  get _httpStatus() {
    return this.httpStatus;
  }

  get _name() {
    return this.name;
  }
}

module.exports = SimpleHttpException;
