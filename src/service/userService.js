const { User } = require('../models');
const userSchema = require('../schemas/userSchema');

const statusError = (status, message) => ({
  status,
  message,
});

const create = async ({ username, token }) => {
  const { error } = userSchema.validate({ username, token });
  if (error) throw statusError(400, error.message);


  const request = await User.create({ username, token });
  return request;
}

module.exports = {
  create
};
