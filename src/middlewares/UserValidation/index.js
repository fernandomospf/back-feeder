const { UserSchema } = require('./UserSchema');
const { UserValidate } = require('./UserValidate');

const userValidate = new UserValidate(UserSchema);

module.exports = {
  userValidate,
};
