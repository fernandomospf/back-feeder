const express = require('express');
const { userRoutes } = require('../modules/User/UserRoutes');

const routes = express.Router();

routes.use('/users', userRoutes);
// routes.use('/project');

module.exports = {
  routes,
}
