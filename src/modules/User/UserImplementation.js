const { UserModel } = require('../../database/models/UserModel');

class UserImplemetation {
  constructor(userModel = UserModel) {
    this.userModel = userModel;
  }

  async findingUser(dataUserLogin)  {
    const { email, password } = dataUserLogin;

    const userFound = await this.userModel.findOne({ where: { email, password } });

    return userFound;
  }
}

module.exports = {
  UserImplemetation,
}
