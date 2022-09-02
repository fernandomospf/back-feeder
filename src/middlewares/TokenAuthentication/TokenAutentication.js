const { CustomError } = require("../../utils/CustomError/CustomError");
const { token } = require("../../utils/Token")

class TokeAutentication {
  constructor() {}

  handleToken (req, _res, next) {
    const { authorization } = req.headers;
    
    if (!authorization) {
      throw new CustomError(400, 'Token not found')
    }

    const { data } = token.verify(authorization);

    req.user = data;

    if (!data) {
      throw new CustomError(this.invalid, 'Invalid or expired token');
    }

    return next();
  }
}

module.exports = {
  TokeAutentication,
}
