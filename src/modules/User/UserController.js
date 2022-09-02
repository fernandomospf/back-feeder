const { UserService } = require('./UserService');

class UserController {
  constructor(userService = new UserService()) {
    this.userService = userService;
  }

  async loginUser(req, res) {
    const userInformations = req.body;

    const loginResponse = await this.userService.loginUser(userInformations);

    return res.status(200).json(loginResponse);
  }

  async registerUser(req, res) {
    const userRegisterInformations = req.body;

    const userRegisteResponse = await this.userService.registerUser(
      userRegisterInformations
    );

    return res.status(200).json(userRegisteResponse);
  }
}

module.exports = {
  UserController,
};
