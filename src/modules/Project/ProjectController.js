const { ProjectService } = require("./ProjectService");

class ProjectController {
  constructor(projectService = new ProjectService()) {
    this.projectService = projectService;
  }

  async getAllUserProject(req, res) {
    const { id } = req.params;
    
    const allProjects = await this.projectService.getAllUserProject(id);

    return res.status(200).json(allProjects);
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