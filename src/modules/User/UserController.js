const { UserService } = require('./UserService');

class UserController {
  constructor(userService = new UserService()) {
    this.userService = userService;
  }

  async loginUser(req, res) {
    const userInformations = req.body;
    
    const loginResponse = await this.userService.loginUser(userInformations);

    return res.status(201).json(loginResponse); 
  }
}

module.exports = {
  UserController,
}
