const express = require('express');
const { projectRoutes } = require('../modules/Project/ProjectRoutes');
const { userRoutes } = require('../modules/User/UserRoutes');

const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/projects', projectRoutes);

module.exports = {
  routes,
}
