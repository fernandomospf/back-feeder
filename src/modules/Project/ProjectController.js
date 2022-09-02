const { ProjectService } = require("./ProjectService");

class ProjectController {
  constructor(projectService = new ProjectService()) {
    this.projectService = projectService;
  }

  async createNewProject(req, res) {
    const userName = req.user;
    const userInfo = req.body;

    const userFound = await this.projectService.createNewProject(userName, userInfo);

    return res.status(200).json(userFound);
  }
}

module.exports = {
  ProjectController,
}