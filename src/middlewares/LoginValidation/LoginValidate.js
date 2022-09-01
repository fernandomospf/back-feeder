const { CustomError } = require('../../utils/CustomError/CustomError');
const { LoginSchema } = require('./LoginSchema');

class LoginValidate {
  constructor(schema = LoginSchema) { 
    this.schema = schema;
  }

  validate(req, _res, next) {
    const { body } = req;
    const result = this.schema.safeParse(body);
    
    if (result.success) {
      return next()
    }
  
    const { issues: [{ message }] } = result.error;
    throw new CustomError(404, message)
  }
}

module.exports = {
  LoginValidate
}

