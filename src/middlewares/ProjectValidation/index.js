const { ProjectSchema } = require('./ProjectSchema');
const { ProjectValidate } = require('./ProjectValidate');

const projectValidate = new ProjectValidate(ProjectSchema);

module.exports = {
  projectValidate,
};
