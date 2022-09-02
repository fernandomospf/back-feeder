const { UserModel } = require('../../database/models/UserModel');

class UserImplemetation {
  constructor(userModel = UserModel) {
    this.userModel = userModel;
  }

  async findingUser(dataUserLogin) {
    const { email, password } = dataUserLogin;

    const userFound = await this.userModel.findOne({
      where: { email, password },
    });

    return userFound;
  }

  async findAllUsers() {
    const allUsers = await this.userModel.findAll();

    return allUsers;
  }

  async createUser(name, dataUser) {
    const { username, email, password, classname } = dataUser;

    const newUser = await this.userModel.create({
      name,
      username,
      email,
      password,
      classname,
    });

    return newUser;
  }
}

module.exports = {
  UserImplemetation,
};
