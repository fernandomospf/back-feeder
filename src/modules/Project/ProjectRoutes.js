const express = require('express');
const { projectControler } = require('.');
const { tokenAutentication } = require('../../middlewares/TokenAuthentication');

const projectRoutes = express.Router();

projectRoutes
  .post(
    '/register',
    (req, res, next) => tokenAutentication.handleToken(req, res, next),
    (req, res) => projectControler.createNewProject(req, res)
  );

module.exports = {
  projectRoutes,
}
