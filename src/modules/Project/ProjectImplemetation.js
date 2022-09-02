const { ProjectModel } = require('../../database/models/ProjectModel');
const { UserModel } = require('../../database/models/UserModel');

class ProjectImplemetation {
  constructor(
    userModel = UserModel,
    projectModel = ProjectModel,
  ) {
    this.userModel = userModel;
    this.projectModel = projectModel;
  }

  async findUserId(userInfo) {
    const { username } = userInfo;

    const findUser = await this.userModel.findOne({ where: { username } });

    const { id: userId } = findUser;

    return userId;
  }

  async createNewProject(projectInfo) {
    const { userId, nameProject, description, url, stacks, module, difficult } = projectInfo;

    const createdProject = await this.projectModel.create({
      nameProject,
      userId,
      description,
      url,
      module,
      difficult,
      stacks,
    });

    return createdProject;
  }
}

module.exports = {
  ProjectImplemetation,
};
