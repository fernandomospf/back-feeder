const express = require('express');
const { loginValidate } = require('../../middlewares/LoginValidation');
const { userController } = require('.');
const { userValidate } = require('../../middlewares/UserValidation');

const userRoutes = express.Router();

userRoutes
  .post(
    '/login',
    (req, res, next) => loginValidate.validate(req, res, next),
    (req, res) => userController.loginUser(req, res)
  )
  .post(
    '/register',
    (req, res, next) => userValidate.validate(req, res, next),
    (req, res) => userController.registerUser(req, res)
  );

module.exports = {
  userRoutes,
};
