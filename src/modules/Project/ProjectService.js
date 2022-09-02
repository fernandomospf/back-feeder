const { ProjectImplemetation } = require("./ProjectImplemetation");

class ProjectService {
  constructor(projectImplemetation = new ProjectImplemetation()) {
    this.projectImplemetation = projectImplemetation;
  }

  async createNewProject(userName, userInfo) {
    const findUser = await this.projectImplemetation.findUserId(userName)

    const formatingProjectObject = userInfo;

    formatingProjectObject.userId = findUser;

    const projectCreationReturn = await this.projectImplemetation.createNewProject(formatingProjectObject);

    return projectCreationReturn;
  }
}

module.exports = {
  ProjectService,
}
