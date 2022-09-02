const { ProjectModel } = require('../../database/models/ProjectModel');
const {
  StackProjectModel,
} = require('../../database/models/StackProjectModel');
const { UserModel } = require('../../database/models/UserModel');

class ProjectImplemetation {
  constructor(
    userModel = UserModel,
    projectModel = ProjectModel,
    stackProjectModel = StackProjectModel
  ) {
    this.userModel = userModel;
    this.projectModel = projectModel;
    this.stackProjectModel = stackProjectModel;
  }

  async findUserId(userInfo) {
    const { username } = userInfo;

    const findUser = await this.userModel.findOne({ where: { username } });

    const { id: userId } = findUser;

    return userId;
  }

  async createNewProject(projectInfo) {
    const { userId, description, url, stacks, module, difficult } = projectInfo;

    const createdProject = await this.projectModel.create({
      userId,
      description,
      url,
      module,
      difficult,
    });

    const { id: projectId } = createdProject;

    Promise.all(
      stacks.map(async ({ id }) => {
        await this.stackProjectModel.create({ projectId, stackId: id });
      })
    );

    return createdProject;
  }
}

module.exports = {
  ProjectImplemetation,
};
