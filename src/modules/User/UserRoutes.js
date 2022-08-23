const express = require('express');
const { userController } = require('.');

const userRoutes = express.Router();

userRoutes
  .post(
  '/login',
  (req, res) => userController.loginUser(req, res),
)

module.exports = {
  userRoutes,
}
