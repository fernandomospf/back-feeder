const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().min(8).required(),
  token: Joi.string().required(),
});

module.exports = userSchema;
