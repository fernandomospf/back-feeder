const express = require('express');
const { loginValidate } = require('../../middlewares/LoginValidation');
const { userController } = require('.');

const userRoutes = express.Router();

userRoutes
  .post(
  '/login', (req, res, next) => loginValidate.validate(req, res, next),
  (req, res) => userController.loginUser(req, res),
)

module.exports = {
  userRoutes,
}
