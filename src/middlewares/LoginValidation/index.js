const { LoginValidate } = require('./LoginValidate');
const { LoginSchema } = require('./LoginSchema');

const loginValidate = new LoginValidate(LoginSchema);

module.exports = {
  loginValidate,
}