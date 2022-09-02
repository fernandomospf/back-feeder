const { CustomError } = require('../../utils/CustomError/CustomError');
const { UserSchema } = require('./UserSchema');

class UserValidate {
  constructor(schema = UserSchema) {
    this.schema = schema;
  }

  validate(req, _res, next) {
    const result = this.schema.safeParse(req.body);

    if (result.success) {
      return next();
    }

    const {
      issues: [{ message }],
    } = result.error;

    throw new CustomError(404, message);
  }
}

module.exports = {
  UserValidate,
};
