const express = require('express');
const { projectControler } = require('.');
const { projectValidate } = require('../../middlewares/ProjectValidation');
const { tokenAutentication } = require('../../middlewares/TokenAuthentication');

const projectRoutes = express.Router();

projectRoutes
  .post(
    '/register',
    (req, res, next) => tokenAutentication.handleToken(req, res, next),
    (req, res, next) => projectValidate.validate(req, res, next),
    (req, res) => projectControler.createNewProject(req, res)
  );

projectRoutes.get('/:id', (req, res) => projectControler.getAllUserProject(req, res))

module.exports = {
  projectRoutes,
}
