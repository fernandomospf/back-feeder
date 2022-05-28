const { User } = require('../models');

const create = async ({username, token}) => {
  const request = await User.create({username, token});
  return request;
}

module.exports = {
  create
};
